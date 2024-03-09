import { useState } from 'react'
import ColorLoader from './components/ColorLoader'
import CommentWrapper from './components/CommentWrapper'
import Form from './components/Form'
import Video from './components/Video'

function App() {
	const [comments, setComments] = useState([])

	function addComment(author, text) {
		const comment = { author, text }

		setComments([...comments, comment])
	}

	return (
		<main className="flex pt-10 justify-center">
			<div className="grid grid-cols-[1fr_300px] justify-center gap-10">
				<Video title="We Are! - One Piece 1000 Special Opening" />
				<Form add={addComment}/>
				<CommentWrapper comments={comments} />
			</div>

			<ColorLoader />
		</main>
	)
}
export default App
