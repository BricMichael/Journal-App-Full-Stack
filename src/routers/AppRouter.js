import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ScreenJournal from '../components/journal/ScreenJournal';
import AuthRouter from './AuthRouter';


const AppRouter = () => {
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
