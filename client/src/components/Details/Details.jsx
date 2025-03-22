const Details = () => {
    return (
        <main>
            <section className="product-details">
                <div className="product-image">
                    <img src="https://placehold.co/600x400" alt="Product Image" />
                </div>
                <div className="product-info">
                    <h1>Gaming Beast Pro</h1>
                    <p className="price">$2,499</p>
                    <div className="specs">
                        <h2>Specifications</h2>
                        <ul>
                            <li>CPU: Intel Core i9-13900K</li>
                            <li>GPU: NVIDIA RTX 4080 16GB</li>
                            <li>RAM: 32GB DDR5 5600MHz</li>
                            <li>Storage: 2TB NVMe SSD</li>
                            <li>Motherboard: ASUS ROG Z690</li>
                            <li>Power Supply: 850W Gold</li>
                        </ul>
                    </div>
                    <div className="actions">
                        <a href="edit.html" className="edit-btn">Edit</a>
                        <a href="#" className="delete-btn">Delete</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Details 