import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <Link to="/">
                        <div className="logo">
                            <h1><i className="fas fa-laptop-code"></i> TechGear</h1>
                        </div>
                    </Link>
                    <nav className="nav">
                        <ul>
                            <li> <Link to="/">Home</Link></li>
                            <li><Link to="/catalog">Products</Link></li>
                            <li><Link to="/login">Login</Link></li>
                             <li><Link to="/register">Register</Link></li> 
                            <li><a href="add-product.html" className="btn-primary">Add Product</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


export default Header

