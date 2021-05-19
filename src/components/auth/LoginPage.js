import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Login } from '../../actions/auth'; //actions
import { useForm } from '../../hooks/useForm';



const LoginPage = () => {

    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        email: 'iverson@gmail.com',
        password: '456789'
    });
    
   const { email, password, name } = values;

   const handleLogin = ( e ) => {
       e.preventDefault();
        dispatch( Login(456789126, 'maicol') )
   }

    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>

            <form onSubmit={ handleLogin }>
                <input type="text" value={ email } className="auth__input" autoComplete="off" onChange={ handleInputChange  } placeholder="Email" name="email" required />
                <input type="password" value={ password } className="auth__input" onChange={ handleInputChange  } placeholder="Password" name="password" required />

                <button type="submit" className="btn btn-primary width">
                    Login
                </button>

                <div className="auth__social_networks">
                    <p>Login with social networks *</p>
                    <div className="google-btn">
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
