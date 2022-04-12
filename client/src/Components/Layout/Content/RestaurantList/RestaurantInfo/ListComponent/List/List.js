import no_image from '../../../../../../../Static/images/no-image.jpg';
import {setSelectedMarker} from "../../../../../../../Redux/restaurantSlice";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {asset} from "../../../../../../../Helper/HelperMethods";
import {Rating} from "react-simple-star-rating";
import Ratings from "../../../../../../UI/Ratings/Ratings";

function List({ restaurant }) {
    const dispatch = useDispatch();

    return (
        <div className="col-md-12 mb-2 pointer effect-hover" onClick={() => dispatch(setSelectedMarker(restaurant))}>
            <div className="row p-0 my-0 bg-white border rounded">
                <div className="col-md-4 mx-0 p-0 scale-effect">
                    <img
                        className="img-fluid img-responsive rounded product-image w-100"
                        src={restaurant.avatar ? asset(restaurant.avatar) : no_image}
                    />
                </div>
                <div className="col-md-5 my-2">
                    <h5>{restaurant.name}</h5>
                    <div className="d-flex flex-row mb-1">
                        <span className='text-truncate'>{restaurant.address}</span>
                    </div>
                    <Ratings ratingValue={+restaurant.rating} size={20} readonly={true} />
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left my-2">
                    <div className="d-flex flex-row align-items-center">
                        <h5 className="mr-1">Tariff: {restaurant.tariff} $</h5>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <Link className="btn btn-outline-primary btn-sm mt-2" type="button" to={`/restaurant/${restaurant.id}`}>View Restaurant</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;