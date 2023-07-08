import getRandomNumber from "../utils/getRandomNumber"

const FormLocation = ({setIdLocation}) => {

    const handleSubmit = e => {
        e.preventDefault()
        const inputValue = e.target.inputId.value.trim()
        if (inputValue === '' || inputValue === '0') {
            setIdLocation(getRandomNumber(126))
        } else {
            setIdLocation(inputValue)
        }
        e.target.inputId.value = ''
    }

  return (
    <form className="resident__input"  onSubmit={handleSubmit}>
        <input className="resident__input-search" id="inputId" style={{ boxShadow: '1px 1px 10px'}}  type="text" />
        <button className="resident__button-search" style={{ backgroundColor: 'green', color: 'white' }}>Search</button>
    </form>
  )
}

export default FormLocation