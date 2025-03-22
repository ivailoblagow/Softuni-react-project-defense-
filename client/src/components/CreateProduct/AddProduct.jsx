const AddProduct = () => {

    return (
        <main>
            <div className="form-container">
                <h1>Add New Product</h1>
                <form className="product-form">
                    <div className="form-group">
                        <label htmlFor="product-name">Product Name</label>
                        <input type="text" id="product-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="product-image">Product Image URL</label>
                        <input type="url" id="product-image" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" id="price" min="0" step="0.01" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpu">CPU</label>
                        <input type="text" id="cpu" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gpu">GPU</label>
                        <input type="text" id="gpu" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ram">RAM</label>
                        <input type="text" id="ram" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="storage">Storage</label>
                        <input type="text" id="storage" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" rows="4" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Add Product</button>
                </form>
            </div>
        </main>

    )
}

export default AddProduct