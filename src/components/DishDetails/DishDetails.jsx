import React from 'react'
import { useParams } from 'react-router-dom'

const DishDetails = () => {
  const params = useParams()
  console.log(params)
  return (

    <div>
      Привет
    </div>
  )
}

export default DishDetails
