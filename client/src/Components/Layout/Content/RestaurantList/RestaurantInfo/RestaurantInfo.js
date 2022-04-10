import ListComponent from "./ListComponent/ListComponent";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants, getRestaurantsData} from "../../../../../Redux/restaurantSlice";
import {useEffect} from "react";
import NoData from "../../../../UI/NoData/NoData";

function RestaurantInfo() {
    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurants);

    useEffect(() => {
        dispatch(getRestaurantsData());
    },[]);

    return (
        <div className="container-fluid mb-5">
            <div className="d-flex justify-content-center row">
                {restaurants.length ? (
                    <>
                        <ListComponent restaurants={restaurants} />
                        <GoogleMaps restaurants={restaurants} />
                    </>
                    ) : <NoData />}
            </div>
        </div>
    )
}

export default RestaurantInfo;