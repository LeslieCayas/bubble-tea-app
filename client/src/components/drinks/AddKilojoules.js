import { useState, useEffect } from "react"
import '../../css/UserDrinks.scss'

function AddKilojoules(props) {
  const [totalKj, setTotalKj] = useState('')

  useEffect(() => {
    addKilojoules()
  }, [])

  const addKilojoules = () => {
    const mixinOneData = props.allMixins.find(mixin => mixin.mixin === props.mixinOne)
    const mixinTwoData = props.allMixins.find(mixin => mixin.mixin === props.mixinTwo)
    const drinkArrData = props.allFlavours.find(flavour => flavour.flavour === props.flavour)
    const mixinArr = [mixinOneData, mixinTwoData]

    const mixinKjArr = mixinArr.map(e => {
      if (e) {
        return e.kilojoules
      } else {
        return 0
      }
    })

    const totalKjArr = [...mixinKjArr, drinkArrData.kilojoules]
    const totalKjValue = totalKjArr.reduce((previousValue, currentValue) => previousValue + currentValue)
    setTotalKj(totalKjValue)
  }

  return (
      <tr>
        <td>
          <span className="drinkFeature">Energy: </span>
        </td>
        <td>
          <span className="value">{totalKj} Kj /serve</span>
        </td>
      </tr>
  )
}

export default AddKilojoules
