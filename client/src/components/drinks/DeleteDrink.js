import axios from "axios"

import { useState } from "react"

function DeleteDrink(props) {

  const deleteDrink = event => {
    const id = props.drinkId
    axios.delete(`api/userDrinks/${id}`)
      .then(() => {
        event.target.closest('.userDrink').remove()
        window.location = '/'
      })
  }

  return(
    <button onClick={deleteDrink}>Delete</button>
  )
}

export default DeleteDrink