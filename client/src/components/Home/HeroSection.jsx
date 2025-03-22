const HeroSection = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Discover the Latest Tech Gadgets</h1>
                        <p>Find the perfect tech products for your lifestyle. From smartphones to laptops, we ve got you
                            covered.</p>
                        <a href="catalog.html" className="btn-primary">Browse Collection</a>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Tech Gadgets" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection