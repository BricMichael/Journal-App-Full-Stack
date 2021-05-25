import { Redirect, Route } from "react-router";
import PropTypes from 'prop-types';

export const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route { ...rest } // => el path o el exact
            component = { (props)  => (
                ( isLoggedIn === false ) 
                    ? <Component { ...props }  /> 
                    : <Redirect to="/" />                   
                )}     
        />   
    )};

PublicRoute.propTypes = { 
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}