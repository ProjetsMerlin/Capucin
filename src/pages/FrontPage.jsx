import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import Error404 from "../pages/Error404"
import Hero from "../components/Hero"
import Divider from "../components/Divider"
import Blog from "../pages/Blog"

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
  }
`

const FrontPage = () => {
  const { data: jsonData, loading: dataLoading, error: dataError } = useData()
  const { loading, error, data } = useAppQuery(GET_HOME, {
    variables: { slug: `home` },
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
    </>
  )
}

export default FrontPage
