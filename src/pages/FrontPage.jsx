import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import Error404 from "../pages/Error404"
import Hero from "../components/Hero"
import Blog from "../pages/Blog"

const GET_POST = gql`
  query GetPostBySlug($slug: String!) {
    postBy(uri: $slug) {
      id
      title
      content
      date
      dateGmt
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`

const FrontPage = () => {
  const { slug } = "home"
  const { data: jsonData, loading: dataLoading, error: dataError } = useData()
  const { loading, error, data } = useAppQuery(GET_POST, {
    variables: { slug: `/${slug}/` },
  })

  if (error || dataError) return error
  if (loading || dataLoading) return loading

  const post = data?.postBy

  if (!post) {
    return <Error404 />
  }

  return (
    <>
      <Hero data={post} />
      <div className="max-w-7xl mx-auto p-4 wrap">
        <h1>Notre blog</h1>
      </div>
      <Blog />
    </>
  )
}

export default FrontPage
