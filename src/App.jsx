import { useState, useEffect } from 'react'
import './App.css'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'
import Loader from './components/Loader'
import useFetch from './hook/useFetch'

function App() {

  const [idLocation, setIdLocation] = useState(getRandomNumber(126)) 

  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  const [ location, getSingleLocation, hasError, isLoading] = useFetch(url)

  useEffect(() => {
    getSingleLocation()
  }, [idLocation])
  
  return (
    <>
      <div className="image__header"></div>
      <FormLocation 
        setIdLocation={setIdLocation}
      />
      {
        isLoading
        ? (<Loader className="loader"/>)
        : (
        hasError
          ? (<h1 className='resident__error'> ❌ Hey! you must provide an id from 1 to 126 😓 </h1>)
          : (
            <>
              <LocationInfo 
                location={location}
              />
              <div className='resident-container'>
                {
                  location?.residents.map( url => (
                    <ResidentCard 
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
            )
          )
      }
    </>
  )
}

export default App




