import Home from "./Pages/Home"
import UserList from "./Pages/UserList"
import NewUser from "./Pages/NewUser"
import Products from "./Pages/Products"
import Product from "./Pages/Product"


let Routes = [
  { path: "/", element: <Home></Home> },
  { path: "/Users", element: <UserList></UserList> },
  { path: "/NewUser", element: <NewUser></NewUser> },
  { path: "/Products", element: <Products></Products> },
  { path: "/Product/:ProductID", element: <Product></Product> },
]

export default Routes