import axios from "axios"
import { Component } from "react"
import '../../css/DrinkForm.scss'
import pinkImg from '../../images/bubble_tea_icons/pink.png'

class CreateDrink extends Component {
  state = {
    storeDrinks: [],
    store: '',
    mixins: []
  }

  componentDidMount() {
    this.getDrinkData()
    this.getMixinData()
  }

  setStore = event => {
    const store = event.target.value
    this.setState({ store })
  }

  getDrinkData = () => {
    axios.get('/api/drinks')
      .then(response => {
        this.setState({ storeDrinks: response.data })
      })
  }

  getMixinData = () => {
    axios.get('/api/mixins')
      .then(response => {
        this.setState({ mixins: response.data })
      })
  }

  createDrink = event => {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))

    axios.post('/api/userDrinks', data)
      .then(() => {
        window.location = '/your-drinks'
      })
      .catch(error => {
        this.setState({ error: error.response.data.error })
      })
  }

  render() {
    // array of objects
    const drinks = this.state.storeDrinks
    const mixins = this.state.mixins
    // array of drink objects based on store name
    const storeDrinks = drinks.filter(drink => drink.store === this.state.store)

    return (
      <div id="createDrinkForm">

        <form id="createDrink" onSubmit={this.createDrink}>
        {this.state.error !== '' && <span id="errors">{this.state.error}</span>}

          <div className="drinkSelection">
            <label htmlFor="Store">Select a store (optional)</label>
            <br />
            <select name="store" onChange={this.setStore}>
              <option>Store</option>
              <option value="ShareTea" id="ShareTea">ShareTea</option>
              <option value="Gong cha" id="Gong cha">Gong cha</option>
              <option value="Chatime">Chatime</option>
            </select>
          </div>

          <div className="drinkSelection">
            <label htmlFor="Store">Select milk tea flavour</label>
            <br />
            <select name="flavour">
              {this.state.store === 'Store' || this.state.store === '' ? drinks.map(drink => <option value={drink.flavour} key={drink.id}>{drink.flavour}</option>) : storeDrinks.map(drink => <option value={drink.flavour} key={drink.id}>{drink.flavour}</option>)}
            </select>
          </div>

          <div className="drinkSelection">
            <label htmlFor="Store">Select a mixin</label>
            <br />
            <select name="mixins_1">
              <option value="None">None</option>
              {mixins.map(mixin => <option value={mixin.mixin} key={mixin.id}>{mixin.mixin}</option>)}
            </select>
          </div>

          <div className="drinkSelection">
            <label htmlFor="Store">Select a mixin</label>
            <br />
            <select name="mixins_2">
              <option value="None">None</option>
              {mixins.map(mixin => <option value={mixin.mixin} key={mixin.id}>{mixin.mixin}</option>)}
            </select>
          </div>


          <div className="drinkSelection">
            <label htmlFor="Store">Sugar Level</label>
            <br />
            <select name="sugar_level">
              <option value="0%">0%</option>
              <option value="30%">30%</option>
              <option value="50%">50%</option>
              <option value="80%">80%</option>
              <option value="100%">100%</option>
            </select>
          </div>
          <div className="drinkSelection">
            <label htmlFor="Store">Ice Level</label>
            <br />
            <select name="ice_level">
              <option value="0%">0%</option>
              <option value="50%">50%</option>
              <option value="100%">100%</option>
            </select>
          </div>

          <input type="submit" value="Create Drink" />
        </form>

        <img src={pinkImg} alt=""/>
      </div>
    )
  }
}

export default CreateDrink