const MainFeaturedProducts = () => {
    return (
        <section className="featured">
            <div className="container">
                <h2 className="section-title">Featured Products</h2>
                <div className="products-grid">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                                alt="Smartphone" />
                        </div>
                        <div className="product-info">
                            <h3>Premium Smartphone</h3>
                            <p className="product-description">Latest model with advanced camera system and all-day battery
                                life.</p>
                            <div className="product-meta">
                                <span className="product-price">$899</span>
                                <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>(128)</span>
                                </div>
                            </div>
                            <a href="product-details.html" className="btn-secondary">View Details</a>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                                alt="Laptop" />
                        </div>
                        <div className="product-info">
                            <h3>Ultra-Thin Laptop</h3>
                            <p className="product-description">Powerful performance in a sleek design with 12-hour battery life.
                            </p>
                            <div className="product-meta">
                                <span className="product-price">$1,299</span>
                                <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(95)</span>
                                </div>
                            </div>
                            <a href="product-details.html" className="btn-secondary">View Details</a>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
                                alt="Wireless Headphones" />
                        </div>
                        <div className="product-info">
                            <h3>Noise-Cancelling Headphones</h3>
                            <p className="product-description">Premium sound quality with active noise cancellation technology.
                            </p>
                            <div className="product-meta">
                                <span className="product-price">$249</span>
                                <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <span>(76)</span>
                                </div>
                            </div>
                            <a href="product-details.html" className="btn-secondary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainFeaturedProducts