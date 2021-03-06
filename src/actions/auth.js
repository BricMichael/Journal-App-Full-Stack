import {firebase, googleAuthProvider} from '../Firebase/firebaseConfig';
import { types } from '../types/types'
import { StartLoading, FinishLoading } from './uiActions';
import Swal from 'sweetalert2';
import { noteLogout } from './notesActions';

let alertError = 'Unidentified user, invalid email or password, please try again.'

export const startLoginEmailPassw = ( email, password) => {
    return (dispatch) => {  // thunk nos ofrece este dispatch 
        dispatch( StartLoading() )

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(( { user }) => {         
                dispatch( Login( user.uid, user.displayName ) );
                dispatch( FinishLoading() );
            } )
            .catch( err =>{
                console.log(err); 
                dispatch( FinishLoading() )
                Swal.fire('Error', alertError , 'error');
            });
    }        
}


export const registerUser = ( email, password, name ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {  // user es un *objecto* que nos devuelve firebase.auth y su resultado es una *promesa*
                await user.updateProfile({ displayName: name })

                dispatch( Login( user.uid, user.displayName ) )

            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message , 'error');
            })       

    }
}

//action AUTH con Google

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch(
                    Login( user.uid, user.displayName)
                )
            })
    }
}

export const Login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        
        dispatch( Logout() );
        dispatch( noteLogout() );     
    }
};

export const Logout = () => ({ type: types.logout })

