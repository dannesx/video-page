import Comment from "./Comment"

function CommentWrapper({comments}) {
	return (
        <div className="col-span-2">
            {comments.map(value => <Comment author={value} text={value}/>)}
        </div>
    )
}
export default CommentWrapper
