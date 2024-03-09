/* eslint-disable react/prop-types */
import { RiSendPlaneFill } from '@remixicon/react'

function Form({ addComment }) {
	function handleForm(e) {
		e.preventDefault()

		const author = e.target['author'].value
		const text = e.target['text'].value
		const comment = { author, text }

		addComment(comment)

		e.target.reset()
	}

	return (
		<form
			className="bg-teal-100 rounded-lg p-6 flex flex-col min-w-[300px] gap-6"
			onSubmit={e => handleForm(e)}
		>
			<div>
				<label htmlFor="name" className="text-teal-500 font-medium">
					Nome
				</label>
				<input
					type="text"
					id="name"
					name="author"
					className="bg-transparent border-b-2 border-teal-500 w-full outline-none transition-colors hover:bg-teal-200 focus:bg-teal-200 p-2 rounded-t"
					required
				/>
			</div>

			<div className="flex-1 flex flex-col">
				<label htmlFor="comment" className="text-teal-500 font-medium">
					Comentário
				</label>
				<textarea
					id="comment"
					name="text"
					className="bg-transparent border-b-2 border-teal-500 resize-none flex-1 w-full outline-none transition-colors hover:bg-teal-200 focus:bg-teal-200 p-2 rounded-t"
					required
				/>
			</div>

			<button
				className="bg-teal-500 p-2 rounded border-none text-white flex justify-center items-center gap-1 font-medium transition-colors hover:bg-teal-600"
				type="submit"
			>
				<RiSendPlaneFill size={20} />
				<span>Comentar</span>
			</button>
		</form>
	)
}
export default Form
