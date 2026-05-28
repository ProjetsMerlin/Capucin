import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import Error404 from "../pages/Error404"
import Hero from "../components/Hero"
import Divider from "../components/Divider"
import Blog from "../pages/Blog"
import Timeline from "../components/Timeline"

const GET_HOME = gql`
  query GetPostBySlug($slug: String!) {
    pageBy(uri: $slug) {
      id
      title
      content
      date
      dateGmt
      isFrontPage
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
    }
    generalSettings {
      description
      siteIconUrl
      title
    }
    users {
      edges {
        node {
          id
          name
          description
          avatar {
            url
          }
        }
      }
    }
  }
`

const FrontPage = () => {
  const { data: jsonData, loading: dataLoading, error: dataError } = useData()
  const { loading, error, data } = useAppQuery(GET_HOME, {
    variables: { slug: `contact` },
  })

  if (error || dataError) return error
  if (loading || dataLoading) return loading

  const post = data.pageBy

  if (!post) {
    return <Error404 />
  }

  return (
    <>
      <Hero data={post} generalSettings={data.generalSettings} />

      <div className="max-w-7xl mx-auto p-4 wrap">
        <div className="pt-16 text-center">
          <h1>Notre blog</h1>
        </div>
      </div>

      <Blog />
      <Divider className="mt-16 border-(--text_color) opacity-30" />
      <div className="max-w-7xl mx-auto p-4 wrap">
        <div className="pt-16 text-center">
          <h1>Nos auteurs</h1>
        </div>
      </div>

      <section className="py-8">
        {/* max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 */}
        <div className="timeline">
          {data.users.edges.map((user, index) => (
            <Timeline
              id={index + "_" + user.node.id}
              key={user.node.id}
              author={user}
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default FrontPage
