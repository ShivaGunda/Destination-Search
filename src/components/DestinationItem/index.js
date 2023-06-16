// Write your code here
import './index.css'

const DestinationsItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li className="list">
      <img src={imgUrl} alt={name} className="listImage" />
      <p className="para"> {name} </p>
    </li>
  )
}

export default DestinationsItem
