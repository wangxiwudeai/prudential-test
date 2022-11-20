import { Router, Route, Switch, Redirect } from "dva/router";
import routes from './routers';
import * as H from 'history';

interface Props {
    history: H.History
}

const App: React.FC<Props> = (props) => {
    return (
        <Router history={props.history}>
            <Switch>
                {
                    routes.map(route => {
                        return <Route exact path={route.path} component={route.component} key={route.path}></Route>;
                    })
                }
                <Redirect exact from="/*" to="/404" />
            </Switch>
        </Router>
    );
}

export default App;
