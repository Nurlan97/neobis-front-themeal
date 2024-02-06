import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './DishDetails.scss';
import axios from 'axios';


const DishDetails = () => {
  const [dishInfo, setDishInfo] = useState([])
  const [ingredients, setIngrediaents] = useState({})


  const { id } = useParams()

  useEffect(() => {
    const fetchMealById = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        if (response.status === 200) {
          setDishInfo(response.data)
          
          const getIngredients = response.data.meals[0]
          const tempIngredients = {}

          for(let key in getIngredients) {
            if(key.includes('strIngredient') && getIngredients[key]) {
              tempIngredients[key] = getIngredients[key];
            }
          }
          setIngrediaents(tempIngredients);
        }

      } catch (err) {
        console.error('Ошибка', err)
      }
    }
    fetchMealById()    
  }, [id])

  return (
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
                { 
                  Object.entries(ingredients).map((item, index) => (
                    <li key={index}className="dishDetails__list_item">- {item[1]} -
                      <b>
                         {dishInfo.meals[0][`strMeasure${index + 1}`]}
                      </b>
                    </li>
                  ))
                }               
              </ul>
            </div>
            <div className="dishDetails__img_container">
              <img src={dishInfo?.meals?.[0]?.strMealThumb} alt="Something's wrong here" className="dishDetails__img" />
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
