import { Link } from "react-router-dom"

const Login = () => {
    <main>
        <div className="form-container">
            <h1>Login</h1>
            <form className="auth-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit" className="submit-btn">Login</button>
                <p className="form-footer">
                    Dont have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    </main>
}

export default Login