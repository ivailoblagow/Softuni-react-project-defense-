const Catalog = () => {
    return (
        <section className="catalog">
            <div className="container">
                <div className="catalog-header">
                    <h1 className="section-title">Product Catalog</h1>
                    <div className="catalog-actions">
                        {/* <!-- <div className="search-box">
                            <input type="text" placeholder="Search products...">
                                <button><i className="fas fa-search"></i></button>
                        </div> --> */}
                        <div className="filter-sort">
                            <select name="category" id="category-filter">
                                <option value="">All Categories</option>
                                <option value="smartphones">Smartphones</option>
                                <option value="laptops">Laptops</option>
                                <option value="audio">Audio</option>
                                <option value="wearables">Wearables</option>
                            </select>
                            {/* <!-- <select name="sort" id="sort-options">
                                <option value="newest">Newest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="popular">Most Popular</option>
                            </select> --> */}
                        </div>
                    </div>
                </div>

                <div className="products-grid catalog-grid">
                    {/* <!-- Product 1 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                                alt="Smartphone" />
                            <div className="product-badges">
                                <span className="badge new">New</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>Premium Smartphone</h3>
                            <p className="product-description">Latest model with advanced camera system and all-day battery
                                life.</p>
                            <div className="product-meta">
                                <span className="product-price">$899</span>
                                {/* <div className="product-rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <span>(128)</span>
                                </div> */}
                            </div>
                            <div className="product-actions">
                                <a href="product-details.html" className="btn-secondary">View Details</a>
                                <button className="btn-icon"><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Product 2 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                                alt="Laptop" />
                            <div className="product-badges">
                                <span className="badge sale">Sale</span>
                            </div>
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
                            <div className="product-actions">
                                <a href="product-details.html" className="btn-secondary">View Details</a>
                                <button className="btn-icon"><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Product 3 --> */}
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
                            <div className="product-actions">
                                <a href="product-details.html" className="btn-secondary">View Details</a>
                                <button className="btn-icon"><i className="far fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* < <div className="pagination">
                    <button className="pagination-btn"><i className="fas fa-chevron-left"></i></button>
                    <button className="pagination-btn active">1</button>
                    <button className="pagination-btn">2</button>
                    <button className="pagination-btn">3</button>
                    <span className="pagination-ellipsis">...</span>
                    <button className="pagination-btn">10</button>
                    <button className="pagination-btn"><i className="fas fa-chevron-right"></i></button>
                </div>  */}
            </div>
        </section>
    )
}

export default Catalog