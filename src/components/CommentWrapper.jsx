import Comment from "./Comment"

function CommentWrapper() {
	return (
        <div className="col-span-2">
            <Comment author="Daniel" text="Muito bom, top"/>
            <Comment author="Joel" text="Curti mano"/>
            <Comment author="Laís" text="Achei fofo"/>
        </div>
    )
}
export default CommentWrapper
