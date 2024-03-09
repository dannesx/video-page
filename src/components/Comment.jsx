import { useState, useEffect } from "react"

/* eslint-disable react/prop-types */
function Comment({ author, text }) {
    const [color, setColor] = useState("amber")

    useEffect(() => {
        const colors = ["red", "amber", "lime", "emerald", "sky", "violet", "fuchsia"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        setColor(randomColor)
    }, [])

	return (
		<div className="flex gap-2 items-center mb-3">
			<div className={`bg-${color}-500 w-12 h-12 rounded-full flex justify-center items-center font-medium text-white text-lg`}>
				{author.charAt(0)}
			</div>
			<h3 className="font-bold">{author}</h3>
			<p>{text}</p>
		</div>
	)
}
export default Comment
