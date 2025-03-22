import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <nav>
                <div className="logo">TechHub</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="add-product" className="add-btn">Add Product</Link></li>
                </ul >
            </nav >
        </header >
    )
}

export default Header;