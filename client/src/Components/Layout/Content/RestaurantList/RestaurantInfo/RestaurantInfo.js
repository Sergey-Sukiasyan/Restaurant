import ListComponent from "./ListComponent/ListComponent";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants, getRestaurantsData} from "../../../../../Redux/restaurantSlice";
import {useEffect} from "react";

function RestaurantInfo() {
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants);

    useEffect(() => {
        dispatch(getRestaurantsData());
    },[]);

    return (
        <div className="container-fluid mb-5">
            <div className="d-flex justify-content-center row">
                <ListComponent restaurants={restaurants} />
                <GoogleMaps restaurants={restaurants} />
            </div>
        </div>
    )
}

export default RestaurantInfo;