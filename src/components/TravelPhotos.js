function TravelPhotos(props) {
  return (
    <div className="photos">
      <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default TravelPhotos;