import axios from "axios"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UpdateDrink from './UpdateDrink'
import DeleteDrink from './DeleteDrink'
// axios call to get all drinks
// how component for the counter form
// pass drink id as a prop for the conuter form component
function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])
  const [updateForm, setUpdateForm] = useState(false)
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

  const handleClick = () => {
    setUpdateForm(!updateForm)
  }

  const deleteDrink = event => {
    console.log(event)

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
                {/* <button onClick={handleClick}>Update Drink</button> */}
                <Link to="/updateDrink">Update Drink</Link>
                  <Route path="/updateDrink">
                    <UpdateDrink drinkId={drink.id} />
                  </Route>
                <DeleteDrink drinkId={drink.id}/>
                {/* {updateForm && <UpdateDrink drinkId={drink.id}/>} */}
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

