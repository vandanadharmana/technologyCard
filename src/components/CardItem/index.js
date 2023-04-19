// Write your code here.
import './index.css'

const CardDetails = props => {
  const {cardSource} = props
  const {title, description, imgUrl, className} = cardSource
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}
export default CardDetails
