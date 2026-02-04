import { DataProvider } from "./context/DataContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Page from "./pages/Page"
import Blog from "./pages/Blog"
import Loading from "./components/Loading"

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="*" element={<Page />} />
            <Route path="/" element={<Page />} />
            <Route path="/blog" element={<Blog />} />
            {/* 
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </DataProvider>
  )
}
