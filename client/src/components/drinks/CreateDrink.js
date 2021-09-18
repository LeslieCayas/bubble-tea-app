import axios from "axios"
import { Component } from "react"

// axios call to get all drinks from drink data
// use data to prefill drop down boxes
// make axios call to post to userdrinks api

class CreateDrink extends Component {
  state = {
    storeDrinks: [],
    store: ''
  }

  // select store
  // based on store make axios call to get drinks 
  // store drinks in state
  // map options

  componentDidMount() {
    this.getDrinkData()
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

  render() {
    // array of objects
    const drinks = this.state.storeDrinks
    // array of all drink flavour names
    const allFlavours = drinks.map(drink => drink.flavour)
    // array of drink objects based on store name
    const storeDrinks = drinks.filter(drink => drink.store == this.state.store)
    const storeFlavours = storeDrinks.map(drink => drink.flavour)
    console.log(drinks)

    console.log(storeDrinks)
    console.log(storeFlavours)
    let flavours
    // const allDrinks = drinks.map(drink => {
    //   return (
    //     <option value="">{drink.flavour}</option>
    //   )
    // })

    return (
      <div id="createDrinkForm">
        <form id="createDrink">
          <select name="store" onChange={this.setStore}>
            <option>Store</option>
            <option value="ShareTea" id="ShareTea">ShareTea</option>
            <option value="Gong cha" id="Gong cha">Gong cha</option>
            <option value="Chatime">Chatime</option>
          </select>
          <select name="drink" id="">
            {this.state.store == 'Store' ||  this.state.store == ''? allFlavours.map(flavour => <option value="">{flavour}</option>) : storeFlavours.map(flavour => <option value="">{flavour}</option>)}
            <option value=""></option>
          </select>

          <select name="mixins_1" id="">
            <option value="none">None</option>
            {/* map mixins from state */}
            <option value=""></option>
          </select>

          <select name="mixins_2" id="">
            <option value="none">None</option>
            {/* map mixins from state */}
            <option value=""></option>
          </select>

          <select name="sugar_level" id="">
            <option value="0%">0%</option>
            <option value="30%">30%</option>
            <option value="50%">50%</option>
            <option value="80%">80%</option>
            <option value="100%">100%</option>
          </select>
          <select name="ice_level" id="">
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