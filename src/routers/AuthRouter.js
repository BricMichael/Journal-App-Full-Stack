import { Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from '../components/auth/LoginPage';
import RegisterPage from '../components/auth/RegisterPage';

const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path="/auth/login" component={ LoginPage }/>
                <Route path="/auth/register" component={ RegisterPage } />

                <Redirect to="/auth/login" />
            </Switch>           
        </div>
    )
}

export default AuthRouter
