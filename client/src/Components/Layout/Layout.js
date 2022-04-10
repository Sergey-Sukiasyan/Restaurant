import { BrowserRouter } from 'react-router-dom';
import '../../styles/layout.css';
import Header from './Header/Header';
import RouteList from './RouteList/RouteList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../UI/Loader/Loader";
import {useSelector} from "react-redux";
import {getLoadingStatus} from "../../Redux/restaurantSlice";

function Layout() {
    const loading = useSelector(getLoadingStatus);

    return (
        <BrowserRouter>
            {loading && <Loader />}
            <ToastContainer />
            <Header />
            <RouteList />
        </BrowserRouter>
    );
}

export default Layout;