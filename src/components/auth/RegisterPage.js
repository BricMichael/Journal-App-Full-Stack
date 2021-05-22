import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'; // valir formularios libreria
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError  } from '../../actions/uiActions';
import { registerUser } from '../../actions/auth';



const RegisterPage = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state  => state.ui) //ui es un reducer

    const [values, handleInputChange] = useForm({
        name: 'Michael',
        email: 'bricHH@gmail.com',
        password: '45678aa',
        password2: '45678aa'
    })

    const { name, email, password, password2 } = values

    const handleRegister = ( e ) => {
        e.preventDefault();
        console.log( `nombre: ${name}, email: ${email}, passw: ${ password }, passw2: ${ password2 } ` )

        if( isFormValid() ) {
            dispatch( registerUser( email, password, name ) )
        }
    }
        // -------------------------------------
    const isFormValid = () => {  //validar formulario

        if( name.trim().length <= 1 ){
            dispatch( setError('Name is required') );
            return false;
        }
        if( !validator.isEmail( email ) ) {
            dispatch( setError('Email is not valid') );
            return false;
        }
        if( password !== password2 || password.length <= 5 ){
            dispatch( setError('Your passwords must match and be longer than 6 characters') );    
            return false;
        }

        dispatch( removeError() )
        return true
    }

    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>

            <form onSubmit={ handleRegister }>

                { 
                    msgError && 
                    ( 
                        <div className="auth__alert_error">
                            { msgError }
                        </div>
                    ) 
                }

                <input type="text" className="auth__input" autoComplete="off" placeholder="Name" value={ name } onChange={ handleInputChange } name="name" required/>
                <input type="text" className="auth__input" autoComplete="off" placeholder="Email" value={ email } onChange={ handleInputChange } name="email" required/>
                <input type="password" className="auth__input" placeholder="Password" name="password" value={ password } onChange={ handleInputChange } required/>
                <input type="password" className="auth__input" placeholder="Confirm password *" value={ password2 } onChange={ handleInputChange } name="password2" required/>


                <button type="submit" className="btn btn-primary mb-5 width">
                    Register
                </button>

                <Link to="/auth" className="link">Already Registered?</Link>

            </form>
        </>
    )
}

export default RegisterPage;
