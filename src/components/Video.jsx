/* eslint-disable react/prop-types */
import Likes from './Likes'

function Video({ title }) {
	return (
		<div>
			<iframe
				width="100%"
				src="https://www.youtube.com/embed/dM7x1PNZDo0?si=uAPB1L6Z_M8LNj1K"
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				className="rounded-lg aspect-video"
			></iframe>

			<div className="flex justify-between items-center gap-20">
				<h1 className="text-xl font-bold">{title}</h1>
				<Likes />
			</div>
		</div>
	)
}
export default Video
