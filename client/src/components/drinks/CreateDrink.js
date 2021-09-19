import axios from "axios"
import { Component } from "react"

// axios call to get all drinks from drink data
// use data to prefill drop down boxes
// make axios call to post to userdrinks api

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
    // this.getDrinkData(store)
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
        window.location = '/'
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
        {this.state.error !== '' && <span id="errors">{this.state.error}</span>}

        <form id="createDrink" onSubmit={this.createDrink}>
          <select name="store" onChange={this.setStore}>
            <option>Store</option>
            <option value="ShareTea" id="ShareTea">ShareTea</option>
            <option value="Gong cha" id="Gong cha">Gong cha</option>
            <option value="Chatime">Chatime</option>
          </select>
          <select name="flavour">
            {this.state.store === 'Store' || this.state.store === '' ? drinks.map(drink => <option value={drink.flavour} key={drink.id}>{drink.flavour}</option>) : storeDrinks.map(drink => <option value={drink.flavour} key={drink.id}>{drink.flavour}</option>)}
          </select>

          <select name="mixins_1">
            <option value="none">None</option>
            {mixins.map(mixin => <option value={mixin.mixin} key={mixin.id}>{mixin.mixin}</option>)}
          </select>

          <select name="mixins_2">
            <option value="none">None</option>
            {mixins.map(mixin => <option value={mixin.mixin} key={mixin.id}>{mixin.mixin}</option>)}
          </select>

          <select name="sugar_level">
            <option value="0%">0%</option>
            <option value="30%">30%</option>
            <option value="50%">50%</option>
            <option value="80%">80%</option>
            <option value="100%">100%</option>
          </select>
          <select name="ice_level">
            <option value="0%">0%</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>

          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}

export default CreateDrink