const Header = () => {
    
    return (
        <header>
            <nav>
                <div className="logo">TechHub</div>
                <ul className="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                    <li><a href="add.html" className="add-btn">Add Product</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;