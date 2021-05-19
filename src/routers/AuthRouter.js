import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';


const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth_box-contain">
                <Switch>
                    <Route path="/auth/login" component={ LoginPage }/>
                    <Route exact path="/auth/register" component={ RegisterPage } />

                    <Redirect to="/auth/login" />
                </Switch>   
            </div>       
        </div>
    )
}

export default AuthRouter
