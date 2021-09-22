import axios from 'axios'
import { useState } from 'react'

function DrinkCounter(props) {
  const [drinkCount, setDrinkCount] = useState(props.drinkCount)

  const changeCount = event => {
    if (drinkCount > 0) {
      if (event.target.value === "-") {
        setDrinkCount(drinkCount - 1)
      }
    }
    if (event.target.value === "+") {
      setDrinkCount(drinkCount + 1)
    }
  }

  const updateCount = () => {
    const id = props.drinkId
    axios.patch(`/api/userDrinks/updateCounter/${id}`, {count: drinkCount})
      .then(resp => {
        console.log(resp)
      })

  }

  return (
    <div className="drinkCounter">

      <form onSubmit={updateCount}>
        <button onClick={changeCount} value="-" type="button">-</button>{drinkCount}<button onClick={changeCount} value="+" type="button">+</button>

        <input type="submit" value="Change Count" />

      </form>
    </div>
  )
}

export default DrinkCounter