import { useData } from "../context/DataContext"
import { gql } from "@apollo/client"
import { useAppQuery } from "../hooks/useAppQuery"
import { useLocation } from "react-router-dom"
import Error404 from "../pages/Error404"

const GET_PAGE = gql`
  query GetPageBySlug($slug: String!) {
    pageBy(uri: $slug) {
      id
      title
      content
      date
      template {
        templateName
      }
      author {
        node {
          name
        }
      }
    }
  }
`

function Page() {
  const locationPath = useLocation()
  const currentPath = locationPath.pathname.split("/")[1] ?? "accueil"

  const { data: jsonData, loading: dataLoading, error: dataError } = useData()
  const { loading, error, data } = useAppQuery(GET_PAGE, {
    variables: { slug: `/${currentPath}/` },
  })

  if (error || dataError) return error
  if (loading || dataLoading) return loading

  const page = data?.pageBy

  if (!page) {
    return <Error404 />
  }

  return (
    <section className="section">
      <div className={currentPath}>
        {page && (
          <div
            data-date={page.date}
            id={page.id}
            className="max-w-3xl mx-auto p-4"
          >
            <div className="text-center">
              <h1>{page.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
            <div className="mt-16">
              <p>
                <strong>Auteur :</strong>{" "}
                <span className="capitalize">{page.author.node.name}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Page
