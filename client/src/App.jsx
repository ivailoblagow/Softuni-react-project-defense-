import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import Catalog from "./components/Catalog/Catalog"
import AddProduct from "./components/CreateProduct/AddProduct"
import Login from "./components/Login/Login"

function App() {
  return (
    <div id="box">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalog />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes >
      <Footer />
    </div>
  )
}

export default App
