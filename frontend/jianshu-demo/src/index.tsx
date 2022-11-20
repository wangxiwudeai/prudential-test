import ReactDOM from 'react-dom';
import App from './App';
import dva from 'dva';
import './index.less';

import { createBrowserHistory } from 'history';

export const app = dva({
    history: createBrowserHistory(),
});

ReactDOM.render(<App history={createBrowserHistory()}/>, document.getElementById('root'));
