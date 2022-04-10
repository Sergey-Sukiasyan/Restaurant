import classes from "./Feedback.module.css";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {useState} from "react";
import useInput from "../../../../../Helper/Hooks/useInput";

function Feedback() {
    const [rating, setRating] = useState(null);
    const textarea = useInput('');

    const setNewRating = (new_rating) => {
        setRating(new_rating);
    }

    return (
        <div className='row card mt-3'>
            <div className='card-body'>
                <div className='d-flex align-items-center'>
                    <h2 className={classes.name}>Give feedback</h2>
                    <ReactStars classNames='mx-3' size={35} onChange={setNewRating} isHalf={true} />
                </div>
                <textarea className='form-control' rows={3} {...textarea} ></textarea>
                <button className='btn btn-primary mt-3 px-5'>Send</button>
            </div>
        </div>
    )
}

export default Feedback;
