import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return (
    <div>
      <navbar>navbar</navbar>
      <Outlet />
    </div>
  )
}

export default HomeLayout