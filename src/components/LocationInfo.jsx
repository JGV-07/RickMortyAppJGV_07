const LocationInfo = ({ location }) => {
  return (
    <article className="resident__container-location">
      <h2 className="resident__location-name">{location?.name}</h2>
      <ul className="resident__info">

        <li className="resident__type">
          <span className="resident__span1">Type:</span>
          <span className="resident__span2">{location?.type}</span>
        </li>
        
        <li className="resident__dimension">
          <span className="resident__span1">Dimension:</span>
          <span className="resident__span2">{location?.dimension}</span>
        </li>
        
        <li className="resident__population">
          <span className="resident__span1">Population:</span>
          <span className="resident__span2">{location?.residents.length}</span>
        </li>
        
      </ul>
    </article>
  )
}

export default LocationInfo;
