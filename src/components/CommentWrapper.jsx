/* eslint-disable react/prop-types */
import Comment from './Comment'

function CommentWrapper({ comments }) {
	return (
		<div className="col-span-2">
			{comments.map((value, index) => (
				<Comment author={value.author} text={value.text} key={index} />
			))}
		</div>
	)
}
export default CommentWrapper
