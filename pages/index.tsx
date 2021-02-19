import { useEffect, useState } from 'react'
import CityTable from '../src/components/CityTable'

export default function Home() {
  const [citiesData, setCitiesData] = useState([])
  // const field = window?.location?.search
  // console.log('FIELD: ', field)

  useEffect(() => {
    const field = window?.location?.search

    const getFilteredData = async (field: string) => {
      const response: any = await fetch(`https://cities-beryl.vercel.app/api/data?orderByField=${field}`)
      const data = await response.json()
      setCitiesData(data.cities)
    }
    getFilteredData(field)
  }, [])

  return (
    <>
    {(citiesData.length === 0) ? (
        <p>Loading</p>
      ) : (
        <CityTable cities={citiesData} />
      )
    }
    </>
  )
}
