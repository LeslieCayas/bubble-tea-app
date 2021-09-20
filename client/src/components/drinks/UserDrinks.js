import axios from "axios"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UpdateDrink from './UpdateDrink'
// axios call to get all drinks
// how component for the counter form
// pass drink id as a prop for the conuter form component
function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])
  const [drinkId, setDrinkId] = useState('')
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
    <Router>
      <div>
        {userDrinks.map(drink => {
          return (
            <div key={drink.id}>
              <ul>
                <li>{drink.flavour}</li>
                <li>{drink.mixins_1}</li>
                <li>{drink.mixins_2}</li>
                <li>{drink.sugar_level}</li>
                <li>{drink.ice_level}</li>

                <Link to="/updateDrink">Update Drink</Link>

                <Switch>
                  <Route path="/updateDrink">
                    <UpdateDrink drinkId={drink.id} />
                  </Route>
                </Switch>

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

