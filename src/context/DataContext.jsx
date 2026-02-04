import { createContext, useContext, useState, useEffect } from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client"

const DataContext = createContext(null)

export function useData() {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error("useData doit Ãªtre utilisÃ© dans un DataProvider")
  }
  return context
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null)
  const [client, setClient] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch("./data.json")
        if (!response.ok) throw new Error("Impossible de charger data.json")
        const jsonData = await response.json()
        setData(jsonData)

        if (jsonData.graphqlEndpoint) {
          const apolloClient = new ApolloClient({
            link: new HttpLink({
              uri: jsonData.graphqlEndpoint,
              fetchOptions: {
                mode: "cors",
              },
            }),
            cache: new InMemoryCache(),
          })
          setClient(apolloClient)
        }
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    init()
  }, [])

  if (loading) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div style={{ color: "red" }}>Erreur : {error}</div>
  }

  if (!client) {
    return <div>Initialisation Apollo ...</div>
  }

  return (
    <DataContext.Provider value={{ data, loading: false, ready: true }}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </DataContext.Provider>
  )
}
