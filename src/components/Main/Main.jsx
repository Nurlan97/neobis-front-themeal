import React from 'react'
import image from '../../images/meal.jpeg';
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
      <div className="container">

        <div className="main__wrapper">

          <div className="main__left">
            <h1 className="main__title">Meal of the Day</h1>
            <p className="main__meal">
              Gigantes Plaki
            </p>
            <p className="main__meal_description">
              Vegetarian | Greek
            </p>
          </div>
          <div className="main__right">
            <img src={image} alt="" className="main__img" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main
