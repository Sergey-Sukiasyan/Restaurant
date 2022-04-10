import Comment from "./Comment/Comment";

function Comments({ feedback }) {
    return (feedback?.length ? feedback.map((comment, index) => <Comment key={comment.id} comment={comment} index={index}  />) : null)
}

export default Comments;
