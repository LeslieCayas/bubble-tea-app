import axios from "axios"
import { useState } from "react"
// axios call to get all drinks
// how component for the counter form
// pass drink id as a prop for the conuter form component
function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])

  const getDrinks = () => {
    axios.get('/api/userDrinks')
      .then(drinks => {
        console.log(drinks.data)
        const drinksArr = drinks.data
        setUserDrinks(drinksArr)
      })
  }

  getDrinks()

  return (
    <div>
      {userDrinks.map(drink => 
        <div>
          {drink.drink}
          {drink.mixins_1}
          {drink.mixins_2}
          {drink.sugar_level}
          {drink.ice_level}
        </div>
        )}
    </div>
  )


  
}

export default UserDrinks