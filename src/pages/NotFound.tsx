// Components
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>404</h1>
          <p>Page not found</p>
          <Link className="link" to="/">Go back to home page</Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound