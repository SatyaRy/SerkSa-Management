import { useState } from 'react'
//styles
import './styles/Global.scss'
//Pages
import Home from "./pages/Home/Home.jsx"
import Expense from "./pages/Expense/Expense.jsx"
import Blog from "./pages/Blog/Blog.jsx"
import Users from "./pages/User/Users.jsx"
import Login from "./pages/Login/Login.jsx"
import Setting from "./pages/Settings/Setting.jsx"
//Router
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
//react query
//components
import Footer from "./components/Footer/Footer.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Menu from "./components/Menu/Menu.jsx"
function App() {
  //build layout
  const Layout =()=>{
    return(
            <div className ="main">
                <Navbar/>
                <div className ="container">
                  <div className ="mainContainer">
                      <Menu/>
                  </div>
                  <div className ="contentContainer">
                      <Outlet/> 
                  </div>
                </div>
            </div>
    )
  }




  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/users",
          element:<Users/>
        },
        {
          path:"/expense",
          element:<Expense/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/setting",
          element:<Setting/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>,
    }
  ])
  return (
    <>
      <RouterProvider router ={router}>
          <Layout/>
      </RouterProvider>
    </>
  )
}

export default App
