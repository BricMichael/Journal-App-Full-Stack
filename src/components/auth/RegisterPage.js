import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>

            <form>
                <input type="text" className="auth__input" autoComplete="off" placeholder="Name" name="name" required/>
                <input type="text" className="auth__input" autoComplete="off" placeholder="Email" name="email" required/>
                <input type="password" className="auth__input" placeholder="Password" name="password" required/>
                <input type="password" className="auth__input" placeholder="Confirm password *" name="password2" required/>


                <button type="submit" className="btn btn-primary mb-5 width">
                    Register
                </button>

                <Link to="/auth" className="link">Already Registered?</Link>

            </form>
        </>
    )
}

export default RegisterPage;
