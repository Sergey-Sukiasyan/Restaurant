import classes from "./Feedback.module.css";
import {useState} from "react";
import {ToastError, ToastSuccess} from "../../../../../Helper/Tostify";
import Textarea from "../../../../UI/Textarea/Textarea";
import {addNewFeedbackApi} from "../../../../../Services/ApiService";
import {useDispatch} from "react-redux";
import {addFeedbackData} from "../../../../../Helper/HelperMethods";
import {setRestaurantOnlyOne} from "../../../../../Redux/restaurantSlice";
import Ratings from "../../../../UI/Ratings/Ratings";
import {useNavigate} from "react-router-dom";

function Feedback({ id, restaurant }) {
    const dispatch = useDispatch();
    const [rating, setRating] = useState(null);
    const [textarea, setTextarea] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const setNewRating = new_rating => setRating(new_rating);

    const sendFeedback = async () => {
        try {
            if(!textarea) {
                setErrors({...errors, textarea: 'The filed is required'});
                ToastError('The filed is required');
            } else {
                const response = await addNewFeedbackApi(id, {comment: textarea, rating});
                if(response.data?.errors) {
                    setErrors({ textarea: response.data?.errors.comment });
                } else {
                    const new_restaurant_data = addFeedbackData(restaurant, response.data);
                    dispatch(setRestaurantOnlyOne(new_restaurant_data));
                    setErrors({});
                    setTextarea('');
                    setNewRating(null);
                    ToastSuccess('Success');
                }
            }
        } catch (e) {
            navigate('/500')
            ToastError(e.message);
        }
    }

    return (
        restaurant && (
        <div className='row card mt-3'>
            <div className='card-body'>
                <div className='d-flex align-items-center'>
                    <h2 className={classes.name}>Give feedback</h2>
                    <Ratings ratingValue={rating} onClick={setNewRating} size={30} showTooltip />
                </div>
                <Textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} placeholder='Comment' rows={5} error={errors.textarea} />
                <button className='btn btn-primary mt-3 px-5' onClick={sendFeedback}>Send</button>
            </div>
        </div> )
    )
}

export default Feedback;
