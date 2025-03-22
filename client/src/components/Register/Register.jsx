import { Link } from "react-router-dom"

const Register = () => {
    return (
        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form className="auth-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" id="confirm-password" required />
                    </div>
                    <button type="submit" className="submit-btn">Register</button>
                    <p className="form-footer">
                        Already have an account? <Link to="/login">Login here</Link>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Register