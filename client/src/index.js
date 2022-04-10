import ReactDom from 'react-dom';
import { store } from './Redux/index';
import { Provider } from 'react-redux';
import Layout from './Components/Layout/Layout';

const App = () => (
    <Provider store={store}>
        <Layout />
    </Provider>
)

ReactDom.render(<App />, document.getElementById('root'));