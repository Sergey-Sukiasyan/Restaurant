import no_image from '../../../../../../../static/images/no-image.jpg';
import {setSelectedMarker} from "../../../../../../../Redux/restaurantSlice";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import ReactStars from "react-rating-stars-component/dist/react-stars";

function List({ restaurant }) {
    const dispatch = useDispatch();

    return (
        <div className="col-md-12 mb-2">
            <div className="row p-0 my-0 bg-white border rounded">
                <div className="col-md-4 mx-0 p-0 scale-effect">
                    <img
                        className="img-fluid img-responsive rounded product-image"
                        src={restaurant.avatar ? restaurant.avatar : no_image}
                        onClick={() => dispatch(setSelectedMarker(restaurant))}
                    />
                </div>
                <div className="col-md-5 my-2">
                    <h5>{restaurant.name}</h5>
                    <div className="d-flex flex-row mb-1">
                        <span className='text-truncate'>{restaurant.address}</span>
                    </div>
                    <ReactStars count={5} value={+restaurant.rating} size={20} edit={false} isHalf={true} />
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