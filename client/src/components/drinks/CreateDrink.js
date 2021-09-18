import axios from "axios"
import { Component } from "react"

// axios call to get all drinks from drink data
// use data to prefill drop down boxes
// make axios call to post to userdrinks api

export default class CreateDrink extends Component {
  state = {}

  // select store
  // based on store make axios call to get drinks 
  // store drinks in state
  // map options

  render() {
    return (
      <div id="createDrinkForm">
        <form id="createDrink" onSubmit="">
          <select name="store" id="">
            <option value="ShareTea"></option>
            <option value="Gong cha"></option>
            <option value="Chatime"></option>
          </select>
          <select name="drink" id="">
            {/*map flavours from state*/}
            <option value="store"></option>

          </select>

          <select name="mixins_1" id=""></select>
          <select name="mixins_2" id=""></select>
          <select name="sugar_level" id=""></select>
          <select name="ice_level" id=""></select>

          <select name="" id=""></select>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}