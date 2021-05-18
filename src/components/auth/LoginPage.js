import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>

            <form>
                <input type="text" className="auth__input" autoComplete="off" placeholder="Email" name="email" required/>
                <input type="password" className="auth__input" placeholder="Password" name="password" required/>

                <button type="submit" className="btn btn-primary width">
                    Login
                </button>

                <div className="auth__social_networks">
                    <p>Login with social networks *</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="link">Create new account</Link>

            </form>


        </>
    )
}

export default LoginPage;
