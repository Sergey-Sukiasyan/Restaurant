import moment from "moment";
import Ratings from "../../../../../UI/Ratings/Ratings";

function Comment({ comment }) {
    return (
        <div className='row card mt-3'>
            <div className='card-body'>
                <div className='d-flex align-items-start justify-content-between'>
                    <Ratings ratingValue={comment.rating ? comment.rating : 0} size={30} readonly={true} />
                    <div className='text-muted fs-10'>{moment(new Date(comment.createdAt), "YYYY-MM-DD").fromNow()}</div>
                </div>
                <p>{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment;
