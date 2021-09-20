import axios from "axios"
import { useState, useEffect } from "react"
// axios call to get all drinks
// how component for the counter form
// pass drink id as a prop for the conuter form component
function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])

  useEffect(() => {
    getDrinks()
  }, [])

  const getDrinks = () => {
    axios.get('/api/userDrinks')
      .then(drinks => {
        console.log(drinks.data)
        const drinksArr = drinks.data
        setUserDrinks(drinksArr)
        console.log(drinksArr)
      })
  }

  return (
    <div>
      {userDrinks.map(drink => 
        <div>
          {drink.flavour}
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