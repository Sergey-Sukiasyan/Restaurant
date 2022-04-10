import classes from "./Feedback.module.css";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {useState} from "react";
import {ToastError, ToastSuccess} from "../../../../../Helper/Tostify";
import Textarea from "../../../../UI/Textarea/Textarea";
import {addNewFeedbackApi} from "../../../../../Services/ApiService";
import {useDispatch} from "react-redux";
import {addFeedbackData} from "../../../../../Helper/HelperMethods";
import {setRestaurantOnlyOne} from "../../../../../Redux/restaurantSlice";

function Feedback({ id, restaurant }) {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(null);
    const [textarea, setTextarea] = useState('');
    const [errors, setErrors] = useState({});

    const setNewRating = new_rating => setRating(new_rating);

    const sendFeedback = async () => {
        try {
            if(!textarea) {
                setErrors({...errors, textarea: 'The filed is required'});
                ToastError('The filed is required');
            } else {
                const response = await addNewFeedbackApi(id, {comment: textarea, rating});
                const new_restaurant_data = addFeedbackData(restaurant, response.data);
                dispatch(setRestaurantOnlyOne(new_restaurant_data));
                setErrors({});
                setTextarea('');
                setNewRating(null);
                ToastSuccess('Success');
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        restaurant && (
        <div className='row card mt-3'>
            <div className='card-body'>
                <div className='d-flex align-items-center'>
                    <h2 className={classes.name}>Give feedback</h2>
                    <ReactStars classNames='mx-3' size={35} onChange={setNewRating} isHalf={true} />
                </div>
                <Textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} placeholder='Comment' rows={5} error={errors.textarea} />
                <button className='btn btn-primary mt-3 px-5' onClick={sendFeedback}>Send</button>
            </div>
        </div> )
    )
}

export default Feedback;
