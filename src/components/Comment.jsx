/* eslint-disable react/prop-types */
function Comment({ author, text }) {
  return (
    <div>
        <h3 className="font-bold">{author}</h3>
        <p>{text}</p>
    </div>
  )
}
export default Comment