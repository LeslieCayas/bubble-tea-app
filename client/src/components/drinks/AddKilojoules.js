import { useState, useEffect } from "react"

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
    const totalKjValue = totalKjArr.reduce((previousValue, currentValue) => previousValue+currentValue)
    setTotalKj(totalKjValue)
  }

  return (
    <span>
      <span className="drinkFeature">Energy: </span> {totalKj} Kj
    </span>
  )
}

export default AddKilojoules
