import no_image from "../../../../../static/images/no-image.jpg";
import classes from "../Restaurant.module.css";
import ReactStars from "react-rating-stars-component";
import {useMemo} from "react";

function Info({ restaurant }) {
    const rating = useMemo(() => {
        let rating = 0;
        restaurant.feedback?.forEach(item => rating += +item.rating)
        return rating / restaurant.feedback?.length;
    },[restaurant]);

    return (
        <div className='row gap-3'>
            <div className='card'>
                <div className="card-body row">
                    <div className="col-5">
                        <img src={restaurant.avatar ? restaurant.avatar : no_image} className='w-100' />
                    </div>
                    <div className="col-7">
                        <div className='d-flex justify-content-between'>
                            <h2 className={classes.name}>{restaurant.name}</h2>
                            {rating ? <ReactStars count={5} value={rating ? rating : 0} size={30} edit={false} isHalf={true} /> : null}
                        </div>
                        <h3 className='my-3'>Tariff: {restaurant.tariff} $</h3>
                        <h5 className='my-3'>Address: {restaurant.address}</h5>
                        <h4>Description</h4>
                        <p>{restaurant.info ? restaurant.info : 'No Description'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;