import React, { useEffect, useState } from 'react'
import image from '../../images/meal.jpeg'
import { Link, useParams } from 'react-router-dom'
import './DishDetails.scss';
import axios from 'axios';


const DishDetails = () => {
  const [dishInfo, setDishInfo] = useState([])


  const { id } = useParams()

  useEffect(() => {
    const fetchMealById = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        if (response.status === 200) {
          setDishInfo(response.data)
        }

      } catch (err) {
        console.error('Ошибка', err)
      }
    }

    fetchMealById()
  }, [id])
  // console.log(dishInfo)

  // const keys = Object.keys(dishInfo.meals)
  // const length = keys.length
  // console.log(keys)

  return (
    //  dishInfo && dishInfo.meals && dishInfo.meals[0] && 
     dishInfo && 
     <>
      <div className='dishDetails'>
        <div className="container">
          <div className="dishDetails__wrapper">
            <div className="dishDetails__info">

              <div className="dishDetails__title_wrapper">


                <h2 className="dishDetails__title">
                  {(dishInfo?.meals?.[0]?.strMeal)}
                </h2>
                <p className="dishDetails__subtitle">{dishInfo?.meals?.[0]?.strCategory} | {dishInfo?.meals?.[0]?.strArea}</p>
              </div>
              <ul className="dishDetails__list">
                <li className="dishDetails__list_item">- Toor dal 1 cup <span>6oz/180g</span></li>
                <li className="dishDetails__list_item">- Water 2-1/2 cups</li>
              </ul>
            </div>
            <div className="dishDetails__img_container">
              <img src={dishInfo?.meals?.[0]?.strMealThumb} alt="Image" className="dishDetails__img" />
            </div>
          </div>
          <div className="dishDetails__instruction">
            <h2 className="dishDetails__instruction_title">Instruction</h2>
            <p className="dishDetails__instruction_text">
              {dishInfo?.meals?.[0]?.strInstructions}
            </p>
            <Link to={dishInfo?.meals?.[0]?.strYoutube} className="dishDetails__instruction_btn">Watch on Youtube</Link>
          </div>
        </div>
      </div>
    </>

    
    
  )
}

export default DishDetails
