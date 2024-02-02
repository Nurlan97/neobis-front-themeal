import React, { useEffect, useState } from 'react'
import image from '../../images/meal2.jpg';
import './SearchResults.scss';
import DishDetails from '../DishDetails/DishDetails';
import axios from 'axios';
import { Link } from 'react-router-dom';


const SearchResults = ({ meal }) => {
  console.log(meal)
  return (
    <ul className='search__list'>
      {
        meal && meal.meals ? meal.meals.map((dish, index) => (
              <li className='search__item' key={index}>
                <Link to={`/dishDetails/${dish.idMeal}`}>
                  <div className="search__item-wrapper">
                    <div className="search__item_img_container">
                      <img src={dish.strMealThumb} alt="image" className='search__item_img' />
                    </div>
                    <div className="search__item_meal_info">
                      <h1 className="search__item_meal_title">
                        {dish.strMeal}
                      </h1>
                      <p className="search__item_meal_description">
                        {dish.strCategory} | {dish.strArea}
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              
          )) : meal && !meal.meals ? "Ничего не найдено!" : '' 
        
      }




    </ul>
  )
}

export default SearchResults
