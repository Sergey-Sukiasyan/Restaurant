import {useParams} from "react-router-dom";
import {useEffect, useMemo} from "react";
import classes from "./Restaurant.module.css";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantOnlyOne, getRestaurantOnlyOneData} from "../../../../Redux/restaurantSlice";

import Info from "./Info/Info";
import Feedback from "./Feedback/Feedback";
import Comments from "./Comments/Comments";

function Restaurant() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const restaurant = useSelector(getRestaurantOnlyOne);

    useEffect(() => {
        dispatch(getRestaurantOnlyOneData(id));
    }, []);

    return (
        <div className={classes.restaurant}>
            <Info restaurant={restaurant} />
            <Comments feedback={restaurant?.feedback} />
            <Feedback />
        </div>
    )
}

export default Restaurant;