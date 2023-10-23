// vendors
import { Route, Routes } from "react-router-dom"
// components
import { Navbar } from "./components"
// layouts
import LayoutPublic from "./layouts/LayoutPublic"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import NotFound from "./pages/NotFound"
import BlogDetails from "./pages/BlogDetails"

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LayoutPublic />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
