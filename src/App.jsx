import { DataProvider } from "./context/DataContext"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Page from "./pages/Page"
import Blog from "./pages/Blog"
import Single from "./pages/Single"
import FrontPage from "./pages/FrontPage"

export default function App() {
  return (
    <DataProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Single />} />
          <Route path="*" element={<Page />} />
        </Routes>
      </Layout>
    </DataProvider>
  )
}
