
const LocationInfo = ({location}) => {
  return (
    <article className="resident__container-location">
        <h2 className="resident__location-name">{location?.name}</h2> 
        <ul className="resident__info">
            <li className="resident__type"><span>Type:</span><span>{location?.type}</span></li>
            <hr />
            <li className="resident__dimension"><span>Dimension:</span><span>{location?.dimension}</span></li>
            <hr />
            <li className="resident__population"><span>Population:</span><span>{location?.residents.length}</span></li>
        </ul>

    </article>
  )
}

export default LocationInfo