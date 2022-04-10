import Comment from "./Comment/Comment";

function Comments({ feedback }) {
    return (feedback?.length ? feedback.map(comment => <Comment key={comment.id} comment={comment}  />) : null)
}

export default Comments;
