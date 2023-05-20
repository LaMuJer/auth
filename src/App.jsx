import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./routes/home/Home.component"
import NavigationComponent from "./routes/nav/Navigation.component"
import Authentication from "./routes/authentication/Authentication"

const Shop = () => {
  return <h1>Welcome to shopping <b><Outlet /></b></h1>
}

const App = () => {

  return (
    <Routes>

      <Route path='/' element={<NavigationComponent />} >
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
      </Route>

    </Routes>
  )
}

export default App
