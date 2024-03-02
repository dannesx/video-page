import { RiHeartFill, RiHeartLine } from '@remixicon/react'
import { useState } from 'react'

function Likes() {
	const [liked, setLiked] = useState(false)
	const [likes, setLikes] = useState(3792)

    function handleClick(){
        setLiked(!liked)

        if (liked) setLikes(likes - 1)
        else setLikes(likes + 1)
    }

	return (
		<div className="flex items-center gap-1 select-none" onClick={handleClick}>
			{liked ? <RiHeartFill /> : <RiHeartLine />}
			<span className="font-bold">{likes}</span>
		</div>
	)
}
export default Likes
