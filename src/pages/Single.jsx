import "../assets/single.css"

import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import { useParams } from "react-router-dom"
import Error404 from "../pages/Error404"
import Author from "../components/Author"
import Taxonomies from "../components/Taxonomies"
import Hero from "../components/Hero"

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
          uri
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

function Single() {
  const { slug } = useParams()
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
      <article className="article-container">
        <Taxonomies tax={[post.categories, post.tags]} />
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Author author={post.author} />
      </article>
    </>
  )
}

export default Single
