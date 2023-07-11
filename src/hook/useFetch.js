import axios from "axios"
import { useState } from "react"

const useFetch = (url) => {
    
    const [infoApi, setinfoApi] = useState()
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getApi = () => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setinfoApi(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err)
                setHasError(true)
            })
            .finally(() => setIsLoading(false))
    }
    return [ infoApi, getApi, hasError, isLoading ]
}

export default useFetch