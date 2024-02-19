import "./App.css"
import React from "react"
import { useRoutes } from "react-router-dom"
import Routes from "./Routes"
import Courses from "./Courses/Courses"
import MainCourse from "./Courses/MainCourse"
import About from "./Courses/About"
import Form from "./Form/Form"
import Users from "./Form/Users"
import TopBar from "./Components/TopBar"
import SideBar from "./Components/SideBar"





function App() {
 
  let MyRoutes = useRoutes(Routes)

  // let MyRoutes = useRoutes(routes)

  return (
    // <Form></Form>

    <div>
      <TopBar></TopBar>
      <div className="Container">
        <SideBar></SideBar>
        {MyRoutes}
      </div>

    </div>


    // <div>
    //   <Header></Header>
    //   <Routes>
    //     <Route path="/" element={<h1 style={{ fontSize: 100, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>Welcome To <span style={{ color: "chartreuse" }}>Paya</span> Accademy</h1>}></Route>
    //     <Route path="/Courses" element={<Courses></Courses>}></Route>
    //     <Route path="/Course/:courseID" element={<MainCourse></MainCourse>}></Route>
    //     <Route path="/About" element={<About></About>}></Route>
    //   </Routes>
    // </div>



    // <div>
    //   <Header></Header>
    //   {MyRoutes}
    // </div>

  )
}

export default App

// <Routes>
//   <Route path="/" element={<Home></Home>}></Route>
//   <Route path="/Posts" element={<Posts></Posts>}></Route>
//   <Route path="/Post/:PostId" element={<MainPost></MainPost>}></Route>

// </Routes>