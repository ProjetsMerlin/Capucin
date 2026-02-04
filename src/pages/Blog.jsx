/*
!!!
- proposer des posts dans le json
*/

import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import { Link, useLocation } from "react-router-dom"
import "../assets/blog.css"

function Blog() {
  const locationPath = useLocation()
  const currentPath = locationPath.pathname.split("/")[1]

  const GET_POSTS = gql`
    query GetPosts {
      readingSettings {
        pageForPosts
        pageOnFront
        postsPerPage
        showOnFront
      }
      posts {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `
  const { data: jsonData, loading: dataLoading, error: dataError } = useData()
  const { loading, error, data } = useAppQuery(GET_POSTS)
  if (error || dataError) return error
  if (loading || dataLoading) return loading
  const posts = data?.posts?.nodes ?? []

  return (
    <section className="section">
      <div className={currentPath}>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/${currentPath}/${post.slug}`}
            className="card"
          >
            {post.featuredImage && (
              <figure>
                <img
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  title={post.title}
                />
              </figure>
            )}

            <div className="wrap">
              {post.date && (
                <h4>{new Date(post.date).toLocaleDateString("fr-BE")}</h4>
              )}

              {post.title && <h3>{post.title}</h3>}

              {post.excerpt && (
                <div
                  className="paragraph"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              )}

              <div className="cta">
                {jsonData.content.fr.more}
                <span className="icon">â†’</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="warning">{jsonData.content.fr.nopost}</p>
      )}
    </section>
  )
}

export default Blog
