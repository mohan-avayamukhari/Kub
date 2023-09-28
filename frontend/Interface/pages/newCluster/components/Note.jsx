const Note = ({ name, number, handelClick }) => {
  return (
    <div>
      <li>
        {name} {number}
        <button onClick={handelClick}>delete</button>
      </li>
    </div>
  )
}
export default Note