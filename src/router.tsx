// vendors
import { createBrowserRouter } from "react-router-dom";
// layouts
import LayoutPublic from "./layouts/LayoutPublic";
// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog, { loaderBlog } from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BlogDetails, { loaderData } from "./pages/BlogDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <BlogDetails />,
            loader: loaderData
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ]
      }
    ]
  },
]);