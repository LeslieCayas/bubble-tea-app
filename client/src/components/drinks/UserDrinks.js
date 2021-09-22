import axios from "axios"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UpdateDrink from './UpdateDrink'
import DeleteDrink from './DeleteDrink'
import DrinkCounter from './DrinkCounter'
// axios call to get all drinks
// how component for the counter form
// pass drink id as a prop for the conuter form component
function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])

  useEffect(() => {
    getUserDrinks()
  }, [])

  const getUserDrinks = () => {
    axios.get('/api/userDrinks')
      .then(drinks => {
        const drinksArr = drinks.data
        setUserDrinks(drinksArr)
      })
  }

  return (
    <Router>
      <div>
        {userDrinks.map(drink => {
          return (
            <div key={drink.id} className="userDrink">
              <ul>
                <li>Flavour: {drink.flavour}</li>
                <li>Mixin: {drink.mixins_1}</li>
                <li>Mixin: {drink.mixins_2}</li>
                <li>Sugar Level: {drink.sugar_level}</li>
                <li>Ice Level: {drink.ice_level}</li>
                <Link to="/updateDrink">Update Drink</Link>
                  <Route path="/updateDrink">
                    <UpdateDrink drinkId={drink.id} />
                  </Route>
                <DeleteDrink drinkId={drink.id}/>
                <DrinkCounter drinkCount={drink.counter} drinkId={drink.id}/>
              </ul>
            </div>
          )
        }
        )}
      </div>
    </Router>

  )
}

export default UserDrinks

