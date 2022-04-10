import classes from './Header.module.css';
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div className={classes.header}>
                <ul>
                    <li>
                        <Link to='/'>Test Task</Link>
                    </li>
                    <li>
                        <Link to='/add'>Add New Restaurant</Link>
                    </li>
                </ul>
            </div>
            <div className={classes.bottom} />
        </>
    );
}

export default Header;