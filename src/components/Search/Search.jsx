import React, { useEffect, useState } from 'react'
import './Search.scss'
import SearchResults from '../SearchResults'
import axios from 'axios'


const Search = () => {
    const [meal, setMeal] = useState(null)
    const [searchMeal, setSearchMeal] = useState('')

    const handleSearchMeal = (event) => {
        setSearchMeal(event.target.value)

    }


    const fetchMealByFirstLetter = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)

            if (response.status === 200) {
                setMeal(response.data)
            }

        } catch (err) {
            console.error('Ошибка', err)
        }

    }



    return (
        <div className="search">
            <div className="container">
                <div className="search__wrapper">
                    <div className="search__form-wrapper">

                        <h1 className="search__form_title">Find your Meal</h1>
                        <form className='search__form' onSubmit={fetchMealByFirstLetter}>
                            <input type="text"
                                className="search__form-input"
                                placeholder='Find your meal'
                                value={searchMeal}
                                onChange={handleSearchMeal} />
                            <button className="search__form-btn" type='submit'>Search</button>

                        </form>
                    </div>
                    <SearchResults meal={meal} />
                    

                </div>

            </div>
        </div>
    )
}

export default Search
