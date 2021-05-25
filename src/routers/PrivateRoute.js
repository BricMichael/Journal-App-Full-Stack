import { Redirect, Route } from "react-router";
import React from 'react'
import PropTypes from 'prop-types';


const PrivateRoute = ({ 
    isLoggedIn, 
    component: Component,
    ...rest  // el resto de los elementos caen aca, como el path, link, etc..
 }) => {
    return (
        <Route  { ...rest }
        component={ (props) => ( // en las props vienen el useHistory, location
            ( isLoggedIn )
                ? ( <Component {...props} /> ) //parentesis opcional
                : ( <Redirect to='/auth/login' /> )

        )}  />
    )
}

PrivateRoute.propTypes = { 
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}


export default PrivateRoute;
