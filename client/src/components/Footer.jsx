const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <div className="logo">
                            <h2><i className="fas fa-laptop-code"></i> TechGear</h2>
                        </div>
                        <p>Your one-stop shop for premium tech products and accessories.</p>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="catalog.html">Products</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="#">Smartphones</a></li>
                            <li><a href="#">Laptops</a></li>
                            <li><a href="#">Audio</a></li>
                            <li><a href="#">Wearables</a></li>
                            <li><a href="#">Accessories</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <ul className="contact-info">
                            <li><i className="fas fa-map-marker-alt"></i> 123 Tech Street, Digital City</li>
                            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
                            <li><i className="fas fa-envelope"></i> info@techgear.com</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 TechGear. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer