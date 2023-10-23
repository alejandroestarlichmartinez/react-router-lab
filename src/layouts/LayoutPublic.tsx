// vendors
import { Outlet, useNavigation } from "react-router-dom"
import { Footer, Navbar } from "../components"

const LayoutPublic = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="py-5">
          {navigation.state === "loading" && (
            <div className="alert alert-info my-5">Loading...</div>
          )}
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LayoutPublic