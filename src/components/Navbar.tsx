import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">

        <NavLink
          to="/"
          className="navbar-brand btn btn-outline-primary"
        >Home</NavLink>
        <NavLink
          to="/about"
          className="navbar-brand btn btn-outline-primary"
        >About us</NavLink>
        <NavLink
          to="/contact"
          className="navbar-brand btn btn-outline-primary"
        >Contact</NavLink>
        <NavLink
          to="/blog"
          className="navbar-brand btn btn-outline-primary"
        >Blog</NavLink>
      </div>
    </div>
  )
}
