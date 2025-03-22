const Catalog = () => {
    return (
        <main>
            <section className="products-header">
                <h1>All Products</h1>
                <div className="filters">
                    <select className="filter-select">
                        <option value="">Sort by</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                    <select className="filter-select">
                        <option value="">Category</option>
                        <option value="gaming">Gaming PC</option>
                        <option value="workstation">Workstation</option>
                        <option value="budget">Budget PC</option>
                    </select>
                </div>
            </section>

            <section className="product-grid">
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

                <div className="product-card">
                    <img src="https://placehold.co/300x200" alt="Mini PC" />
                    <h3>Compact Pro</h3>
                    <p>RTX 4060, i5-13600K, 32GB RAM</p>
                    <p className="price">$1,299</p>
                    <a href="product-details.html?id=4" className="view-details">View Details</a>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/300x200" alt="Extreme PC" />
                    <h3>Ultimate Beast</h3>
                    <p>RTX 4090, i9-13900KS, 128GB RAM</p>
                    <p className="price">$4,999</p>
                    <a href="product-details.html?id=5" className="view-details">View Details</a>
                </div>

                <div className="product-card">
                    <img src="https://placehold.co/300x200" alt="Office PC" />
                    <h3>Office Pro</h3>
                    <p>Intel UHD, i3-13100, 16GB RAM</p>
                    <p className="price">$599</p>
                    <a href="product-details.html?id=6" className="view-details">View Details</a>
                </div>
            </section>
        </main>
    )
}

export default Catalog