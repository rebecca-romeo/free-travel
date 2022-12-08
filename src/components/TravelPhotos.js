import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function TravelPhotos(props) {

  return (

    <div className="photos">
      <img src={props.src} alt={props.alt} class="images" />

      <div className="likes">
      <p> <FontAwesomeIcon icon="heart" className="hearts"/> {props.likes}</p>
      </div>

    </div>
  )
}

export default TravelPhotos;