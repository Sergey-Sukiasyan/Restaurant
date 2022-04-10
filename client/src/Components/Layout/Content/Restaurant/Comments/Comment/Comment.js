import ReactStars from "react-rating-stars-component/dist/react-stars";
import moment from "moment";

function Comment({ comment, index }) {
    return (
        <div className='row card mt-3'>
            <div className='card-body'>
                <div className='d-flex align-items-start justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <h5 className='m-0'>{index +1}. </h5>
                        <ReactStars count={5} size={35} value={comment.rating ? comment.rating : 0} isHalf={true} edit={false} />
                    </div>
                    <div className='text-muted fs-10'>{moment(new Date(comment.createdAt), "YYYY-MM-DD").fromNow()}</div>
                </div>
                <p>{comment.comment}</p>
            </div>
        </div>
    )
}

export default Comment;
