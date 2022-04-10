import { BrowserRouter } from 'react-router-dom';
import '../../styles/layout.css';
import Header from './Header/Header';
import RouteList from './RouteList/RouteList';


function Layout() {
    return (
        <BrowserRouter>
            <Header />
            <RouteList />
        </BrowserRouter>
    );
}

export default Layout;