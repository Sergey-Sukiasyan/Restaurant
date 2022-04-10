import classes from "./Loader.module.css";
import loader from '../../../static/images/loader.gif';

function Loader() {
    return (
        <div className={classes.loader}>
            <img src={loader} />
        </div>
    );
}

export default Loader;