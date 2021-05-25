import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassw } from '../../actions/auth'; //actions
import { setError, removeError } from '../../actions/uiActions';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert2';


const LoginPage = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector( state => state.ui)

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    });
    
   const { email, password} = values;

   const handleLogin = ( e ) => {
       e.preventDefault();    
        if ( isFormValid() ) {
            dispatch( startLoginEmailPassw(email, password) )
        }
   }

   const handleLoginGoogle = () => {
       dispatch( startGoogleLogin() )
   }
   // -------------------------------------------
   const isFormValid = () => {  //validar formulario

        if( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') );
            Swal.fire('Error in Email', 'Email is not valid' , 'error');
            return false;
        }
        if( password.length <= 5 ){
            dispatch( setError('Your password must be longer than 6 characters.') );    
            Swal.fire('Password failed', 'You password must match and be longer than 6 characters.' , 'error');
            return false;
        }

        if( msgError ) dispatch( removeError() )
        return true
    }

    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>

            <form onSubmit={ handleLogin }>

                { 
                    msgError && 
                    ( 
                        <div className="auth__alert_error">
                            { msgError }
                        </div>
                    ) 
                }
                <input type="text" value={ email } className="auth__input" autoComplete="off" onChange={ handleInputChange  } placeholder="Email" name="email" required />
                <input type="password" value={ password } className="auth__input" onChange={ handleInputChange  } placeholder="Password" name="password" required />

                <button type="submit" className="btn btn-primary width" disabled={ loading }>
                            Login
                </button>

                <div className="auth__social_networks">
                    <p>Login with social networks *</p>
                    <div className="google-btn" onClick= { handleLoginGoogle }>
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
