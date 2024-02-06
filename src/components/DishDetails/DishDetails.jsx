import React, { useEffect, useState } from 'react'
import image from '../../images/meal.jpeg'
import { Link, useParams } from 'react-router-dom'
import './DishDetails.scss';
import axios from 'axios';


const DishDetails = () => {
  const [dishInfo, setDishInfo] = useState([])
  const [ingredients, setIngrediaents] = useState({})
  const [ingredientsMeasure, setIngredientsMeasure] = useState({})

  const { id } = useParams()

  useEffect(() => {
    const fetchMealById = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        if (response.status === 200) {
          setDishInfo(response.data)
          
          const getIngredients = response.data.meals[0]
          const tempIngredients = {}
          const tempIngredientsMeasure = {}

          for(let key in getIngredients) {
            if(key.includes('strIngredient')) {
              tempIngredients[key] = getIngredients[key];
      
            }

            if(key.includes('strMeasure')) {
              tempIngredientsMeasure[key] = getIngredients[key];
            }
          }

          setIngrediaents(tempIngredients);
          setIngredientsMeasure(tempIngredientsMeasure)
          // setIngredientsMeasure(prevState => ({ ...prevState, ...tempIngredientsMeasure }));

          
          
        }

      } catch (err) {
        console.error('Ошибка', err)
      }
    }

    fetchMealById()

    
  }, [id, ingredientsMeasure])
  
  console.log(Object.entries(ingredientsMeasure).map(item => item[1]))
  // console.log(ingredientsMeasure)

  // console.log(Object.entries(ingredients))

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

                { 
                  Object.entries(ingredients).map((item, index) => (
                    <li key={index}className="dishDetails__list_item">- {item[1]} 
                      <span>
                        {Object.values(ingredientsMeasure).map(item => item[1])}  
                        
                      </span>
                    </li>
                    // console.log(item[1])
                  ))
                }
                {/* <li className="dishDetails__list_item">- Toor dal 1 cup <span>6oz/180g</span></li>
                <li className="dishDetails__list_item">- Water 2-1/2 cups</li> */}
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
