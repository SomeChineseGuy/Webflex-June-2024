import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img src="" alt="" className="card-img" />
      <div className="card-container">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-p">{props.content}</p>
        <button 
          className={`card-button ${props.buttonStatus ? props.buttonStatus : "" }`}
          >
            {props.buttonWords}
        </button>
      </div>
    </div>
  )
}

export default Card;