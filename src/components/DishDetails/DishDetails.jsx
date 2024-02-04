import React from 'react'
import image from '../../images/meal.jpeg'
import { Link } from 'react-router-dom'
import './DishDetails.scss';


const DishDetails = () => {
  
  return (

    <div className='dishDetails'>
      <div className="container">
        <div className="dishDetails__wrapper">
          <div className="dishDetails__info">
            <div className="dishDetails__title_wrapper">

              <h2 className="dishDetails__title">Dal fry</h2>
              <p className="dishDetails__subtitle">Vegetarian | Indian</p>
            </div>
            <ul className="dishDetails__list">
              <li className="dishDetails__list_item">- Toor dal 1 cup <span>6oz/180g</span></li>
              <li className="dishDetails__list_item">- Water 2-1/2 cups</li>
            </ul>
          </div>
          <div className="dishDetails__img_container">
            <img src={image} alt="" className="dishDetails__img" />
          </div>
        </div>
        <div className="dishDetails__instruction">
          <h2 className="dishDetails__instruction_title">Instruction</h2>
          <p className="dishDetails__instruction_text">
          Mix Sauce in small bowl. Mince garlic into wok with oil. Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden. Push to the side of the wok, crack egg in and scramble. Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour. Add noodles, Chinese broccoli leaves and sauce. Gently mix together until the noodles are stained dark and leaves are wilted. Serve immediately!
          </p>
          <Link to="https://www.youtube.com/watch?v=Ohy1DELF4is" className="dishDetails__instruction_btn">Watch on Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default DishDetails
