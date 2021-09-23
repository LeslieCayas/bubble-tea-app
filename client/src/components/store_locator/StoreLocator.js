import axios from "axios"
import { useEffect, useState } from "react"

function StoreLocator() {
  const [stores, setStores] = useState({})

  useEffect(() => {
    getPlaces()
  }, [])

  const getPlaces = () => {

  }

  return (
    <div>

    </div>
  )
}

export default StoreLocator