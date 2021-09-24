import axios from "axios"

function DeleteDrink(props) {

  const deleteDrink = event => {
    const id = props.drinkId
    axios.delete(`api/userDrinks/${id}`)
      .then(() => {
        event.target.closest('.userDrink').remove()
        window.location = '/your-drinks'
      })
  }

  return(
    <button onClick={deleteDrink}>Delete</button>
  )
}

export default DeleteDrink