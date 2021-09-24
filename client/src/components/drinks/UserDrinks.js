import axios from "axios"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import UpdateDrink from './UpdateDrink'
import DeleteDrink from './DeleteDrink'
import DrinkCounter from './DrinkCounter'
import AddKilojoules from './AddKilojoules'
import '../../css/UserDrinks.scss'

function UserDrinks() {
  const [userDrinks, setUserDrinks] = useState([])
  const [mixinsData, setMixinsData] = useState([])
  const [drinksData, setDrinksData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      axios.get('/api/userDrinks'),
      axios.get('/api/mixins'),
      axios.get('/api/drinks'),

    ]).then(([userDrinks, mixinData, drinksData]) => {
      setUserDrinks(userDrinks.data)
      setMixinsData(mixinData.data)
      setDrinksData(drinksData.data)
      setLoading(false)
    })

  }, [])

  return (

    <div id="allUserDrinks">
      {loading ? `loading` : userDrinks.map(drink => {
        return (
          <div className="userDrink" key={drink.id}>
            <table className="userDrinkInfo">
              <thead>
                <tr>
                  <td colSpan="2">
                    <h2>{drink.flavour}</h2>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="drinkFeature">Mixin: </span>
                  </td>
                  <td>
                    <span className="value">{drink.mixins_1}</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="drinkFeature">Mixin: </span>
                  </td>
                  <td>
                    <span className="value">{drink.mixins_2}</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="drinkFeature">Sugar Level: </span>
                  </td>
                  <td>
                    <span className="value">{drink.sugar_level}</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span className="drinkFeature">Ice Level: </span>
                  </td>
                  <td>
                    <span className="value">{drink.ice_level}</span>
                  </td>
                </tr>
                <AddKilojoules flavour={drink.flavour} mixinOne={drink.mixins_1} mixinTwo={drink.mixins_2} allFlavours={drinksData} allMixins={mixinsData} />
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="2">
                    <DrinkCounter drinkCount={drink.counter} drinkId={drink.id} />
                  </td>
                </tr>
              </tfoot>
            </table>

            <Router>
              <div id="drinkControls">

                <button><Link to="/updateDrink">Update Drink</Link></button>

                <Route path="/updateDrink">
                  <UpdateDrink drinkId={drink.id} mixinsData={mixinsData} />
                </Route>

                <DeleteDrink drinkId={drink.id} />
              </div>
            </Router>

          </div>
        )
      }
      )}
    </div>

  )
}

export default UserDrinks