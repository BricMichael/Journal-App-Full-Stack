import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ScreenJournal from '../components/journal/ScreenJournal';
import AuthRouter from './AuthRouter';
import { firebase } from '../Firebase/firebaseConfig'
import { useDispatch } from 'react-redux';
import { Login } from '../actions/auth';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [ cheking, setCheking ] = useState(true);

    const [ isLoggedIn, setIsLoggedIn ] = useState(false) // Privacidad a las rutas

    

    useEffect(() => {
        // Funcion que permite estar a la escucha de las acciones de auth del user
       firebase.auth().onAuthStateChanged( user => { // se ejecuta siempre que la autenticacion tiene un cambio

        if( user?.uid ){ //el signo de ? evalua si el user tiene algo y si es así, evalua el uid
            dispatch( Login( user.uid, user.displayName ) );
            setIsLoggedIn(true) 
        }else{
            setIsLoggedIn(false)
        }
        setCheking(false)

       });


    }, [ dispatch, setCheking, setCheking ]) //lo que usa el useEffect


    if ( cheking ) {  //Vista de aviso de que se esta confirmando su auth
        return (
            <>
                <h1>Wait...</h1>
            </>
        )
    }


    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ ScreenJournal } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>            
        </Router>
    )
}

export default AppRouter
