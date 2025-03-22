const Login = () => {

    return (
        <section className="auth-section">
            <div className="container">
                <div className="auth-container">
                    <div className="auth-content">
                        <div className="auth-header">
                            <h1>Welcome Back</h1>
                            <p>Sign in to your TechGear account</p>
                        </div>
                        <form className="auth-form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" id="email" placeholder="    Enter your email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-icon">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" id="password" placeholder="Enter your password" required />
                                    <button type="button" className="password-toggle"><i className="far fa-eye"></i></button>
                                </div>
                            </div>
                            <div className="form-options">
                                <label className="checkbox-container">
                                    <input type="checkbox" id="remember-me" />
                                    <span className="checkmark"></span>
                                    Remember me
                                </label>
                                <a href="#" className="forgot-password">Forgot password?</a>
                            </div>
                            <button type="submit" className="btn-primary btn-block">Sign In</button>
                        </form>
                        <div className="auth-footer">
                            <p>Dont have an account? <a href="register.html">Sign up</a></p>
                        </div>
                    </div>
                    <div className="auth-image">
                        <img src="https://images.unsplash.com/photo-1616763355548-1b606f439f86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            alt="Login" />
                        <div className="auth-image-overlay">
                            <div className="auth-image-content">
                                <h2>Access Your TechGear Account</h2>
                                <p>Manage your orders, track shipments, and enjoy a personalized shopping experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login