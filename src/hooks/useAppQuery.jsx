import { useQuery } from "@apollo/client"
import { useData } from "../context/DataContext"
import Error from "../components/Error"
import Loading from "../components/Loading"

export function useAppQuery(query, options = {}) {
  const { ready } = useData()
  const { data, loading, error } = useQuery(query, {
    ...options,
    skip: !ready || options.skip,
  })

  return {
    ready,
    loading: !ready || loading ? <Loading message="Loading ..." /> : false,
    error: error ? <Error message={error.message} /> : false,
    data,
  }
}