const Register = () => {
    return (
        <section className="auth-section">
            <div className="container">
                <div className="auth-container">
                    <div className="auth-content">
                        <div className="auth-header">
                            <h1>Create an Account</h1>
                            <p>Join TechGear to start shopping and selling tech products</p>
                        </div>
                        <form className="auth-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="first-name">First Name</label>
                                    <div className="input-icon">
                                        <i className="fas fa-user"></i>
                                        <input type="text" id="first-name" placeholder="First name" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last-name">Last Name</label>
                                    <div className="input-icon">
                                        <i className="fas fa-user"></i>
                                        <input type="text" id="last-name" placeholder="Last name" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="input-icon">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" id="email" placeholder="Enter your email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-icon">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" id="password" placeholder="Create a password" required />
                                    <button type="button" className="password-toggle"></button>
                                </div>
                                {/* <<div className="password-strength">
                                    <div className="strength-meter">
                                        <div className="strength-segment"></div>
                                        <div className="strength-segment"></div>
                                        <div className="strength-segment"></div>
                                        <div className="strength-segment"></div>
                                    </div>
                                    <span className="strength-text">Password strength: Weak</span>
                                </div>  */}
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <div className="input-icon">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" id="confirm-password" placeholder="Confirm your password"
                                        required />
                                    <button type="button" className="password-toggle"></button>
                                </div>
                            </div>
                            {/* <div className="form-options">
                                <label className="checkbox-container">
                                    <input type="checkbox" id="terms" required>
                                        <span className="checkmark"></span>
                                        I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                                </label>
                            </div> */}
                            <button type="submit" className="btn-primary btn-block">Create Account</button>
                        </form>
                        <div className="auth-footer">
                            <p>Already have an account? <a href="login.html">Sign in</a></p>
                        </div>
                    </div>
                    <div className="auth-image">
                        <img src="https://c4.wallpaperflare.com/wallpaper/953/97/219/samsung-galaxy-f-foldable-smartphone-hd-wallpaper-preview.jpg"
                            alt="Register" />
                        <div className="auth-image-overlay">
                            <div className="auth-image-content">
                                <h2>Join Our Tech Community</h2>
                                <p>Create an account to unlock all the features of TechGear.</p>
                                <ul className="auth-benefits">
                                    <li><i className="fas fa-check-circle"></i> Buy and sell tech products</li>
                                    <li><i className="fas fa-check-circle"></i> Get exclusive deals and offers</li>
                                    <li><i className="fas fa-check-circle"></i> Join our rewards program</li>
                                    <li><i className="fas fa-check-circle"></i> Connect with tech enthusiasts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Register