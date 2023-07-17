import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../screens/home/Home";


const Router = () => {
  return (
    createBrowserRouter([
      {
        path: '/',
        element: <Home/>,
        errorElement: <div>Not found</div>,
      },
    ])
  )
}

export default Router