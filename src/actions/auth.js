import {firebase, googleAuthProvider} from '../Firebase/firebaseConfig';
import { types } from '../types/types'


export const startLoginEmailPassw = ( email, password) => {
    return (dispatch) => {  // thunk nos ofrece este dispatch 
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(( { user }) => {
                 dispatch( Login( user.uid, user.displayName ) )

            } )
            .catch( err => console.log(err) )   
    }        
}


export const registerUser = ( email, password, name ) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {  // user es un *objecto* que nos devuelve firebase.auth y su resultado es una *promesa*
                await user.updateProfile({ displayName: name })

                dispatch( Login( user.uid, user.displayName ) )

            })
            .catch(e => console.log(e))
                
            

    }
}

//action AUTH con Google

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                console.log(user)
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
})

