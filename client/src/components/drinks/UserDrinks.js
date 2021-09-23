import axios from "axios"
import { useState, useEffect, setState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UpdateDrink from './UpdateDrink'
import DeleteDrink from './DeleteDrink'
import DrinkCounter from './DrinkCounter'
import AddKilojoules from './AddKilojoules'

function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])
  const [mixinsData, setMixinsData] = useState([])
  const [drinksData, setDrinksData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      axios.get('/api/userDrinks'),
      axios.get('/api/mixins'),
      axios.get('/api/drinks')
    ]).then(([userDrinks, mixinData, drinksData]) => {
      setUserDrinks(userDrinks.data)
      setMixinsData(mixinData.data)
      setDrinksData(drinksData.data)
      setLoading(false)
    }) 

  }, [])

  return (
    <Router>
      <div>
        {loading ? `loading` : userDrinks.map(drink => {
          return (
            <div key={drink.id} className="userDrink">
              <ul>
                <h2>{drink.flavour}</h2>
                <li><span className="drinkFeature">Mixin: </span>{drink.mixins_1}</li>
                <li><span className="drinkFeature">Mixin: </span>{drink.mixins_2}</li>
                <li><span className="drinkFeature">Sugar Level: </span>{drink.sugar_level}</li>
                <li><span className="drinkFeature">Ice Level: </span>{drink.ice_level}</li>
                <AddKilojoules flavour={drink.flavour} mixinOne={drink.mixins_1} mixinTwo={drink.mixins_2} allFlavours={drinksData} allMixins={mixinsData} />

                <DrinkCounter drinkCount={drink.counter} drinkId={drink.id} />

                <div id="drinkControls">
                  <Link to="/updateDrink">Update Drink</Link>

                  <Route path="/updateDrink">
                    <UpdateDrink drinkId={drink.id} mixinsData={mixinsData} />
                  </Route>

                  <DeleteDrink drinkId={drink.id} />
                </div>
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

