import React, { useEffect, useState } from 'react'
import './Main.scss'
import axios from 'axios';
import Search from '../Search/Search';



const Main = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  useEffect(() => {
    const fetChRandomMeal = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
        setRandomMeal(response.data)

      } catch (err) {
        console.log(err)
      }
    }

    fetChRandomMeal()
  }, [])


  return (
    <div className='main'>
      <div className="container">

        <div className="main__wrapper">
          {randomMeal &&
            <>
              <div className="main__left">

                <h1 className="main__title">Meal of the Day</h1>
                <p className="main__meal">
                  {randomMeal.meals[0].strMeal}
                </p>
                <p className="main__meal_description">
                  {randomMeal.meals[0].strCategory} | {randomMeal.meals[0].strArea}
                </p>
              </div>
              <div className="main__right">
                <img src={randomMeal.meals[0].strMealThumb} alt="" className="main__img" />
              </div>
            </>}
        </div>
      </div>

      <Search/>

    </div>
  )
}

export default Main
