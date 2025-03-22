const Home = () => {

    return (
        <main>
            <section className="hero">
                <h1>Welcome to TechHub</h1>
                <p>Discover the latest in computing technology</p>
                <a href="products.html" className="cta-button">Browse All Products</a>
            </section>

            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <img src="https://placehold.co/300x200" alt="Gaming PC" />
                        <h3>Gaming Beast Pro</h3>
                        <p>RTX 4080, i9-13900K, 32GB RAM</p>
                        <p className="price">$2,499</p>
                        <a href="product-details.html?id=1" className="view-details">View Details</a>
                    </div>

                    <div className="product-card">
                        <img src="https://placehold.co/300x200" alt="Workstation PC" />
                        <h3>Creator Workstation</h3>
                        <p>RTX 4070, i7-13700K, 64GB RAM</p>
                        <p className="price">$1,899</p>
                        <a href="product-details.html?id=2" className="view-details">View Details</a>
                    </div>

                    <div className="product-card">
                        <img src="https://placehold.co/300x200" alt="Budget PC" />
                        <h3>Budget Champion</h3>
                        <p>RTX 3060, i5-13400F, 16GB RAM</p>
                        <p className="price">$999</p>
                        <a href="product-details.html?id=3" className="view-details">View Details</a>
                    </div>
                </div>
            </section>

            <section className="categories">
                <h2>Shop by Category</h2>
                <div className="category-grid">
                    <div className="category-card">
                        <img src="https://placehold.co/400x300" alt="Gaming PCs" />
                        <h3>Gaming PCs</h3>
                        <p>High-performance computers for the ultimate gaming experience</p>
                        <a href="products.html?category=gaming" className="category-link">View Gaming PCs</a>
                    </div>
                    <div className="category-card">
                        <img src="https://placehold.co/400x300" alt="Workstations" />
                        <h3>Workstations</h3>
                        <p>Professional-grade computers for content creators and developers</p>
                        <a href="products.html?category=workstation" className="category-link">View Workstations</a>
                    </div>
                    <div className="category-card">
                        <img src="https://placehold.co/400x300" alt="Office PCs" />
                        <h3>Office PCs</h3>
                        <p>Reliable computers for business and productivity</p>
                        <a href="products.html?category=office" className="category-link">View Office PCs</a>
                    </div>
                </div>
            </section>

            <section className="why-choose-us">
                <h2>Why Choose TechHub?</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>Expert Support</h3>
                        <p>24/7 technical support from our experienced team</p>
                    </div>
                    <div className="feature">
                        <h3>Custom Builds</h3>
                        <p>Customize your PC to match your exact needs</p>
                    </div>
                    <div className="feature">
                        <h3>Fast Shipping</h3>
                        <p>Quick and secure delivery to your doorstep</p>
                    </div>
                    <div className="feature">
                        <h3>Warranty</h3>
                        <p>3-year warranty on all our products</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home