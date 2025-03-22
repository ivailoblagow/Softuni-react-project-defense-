const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <h2 className="section-title">Shop by Category</h2>
                <div className="categories-grid">
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                            alt="Smartphones" />
                        <h3>Smartphones</h3>
                        <a href="catalog.html" className="btn-text">Browse All <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                            alt="Laptops" />
                        <h3>Laptops</h3>
                        <a href="catalog.html" className="btn-text">Browse All <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="category-card">
                        <img src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Audio" />
                        <h3>Audio</h3>
                        <a href="catalog.html" className="btn-text">Browse All <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="category-card">
                        <img src="https://th.bing.com/th/id/OIP.XuXa83NES-PLG0AeUtizdwHaFk?rs=1&pid=ImgDetMain"
                            alt="Wearables" />
                        <h3>Wearables</h3>
                        <a href="catalog.html" className="btn-text">Browse All <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories