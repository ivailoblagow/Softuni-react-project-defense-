import { Routes, Route } from "react-router-dom"

import Home from "./components/Home/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Catalog from "./components/Catalog/Catalog"
import Login from "./components/Authentication/Login"
import Register from "./components/Authentication/Register"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
