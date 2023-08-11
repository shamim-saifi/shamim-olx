import React from 'react'
import './HomeCard.css'
import {AiOutlineHeart} from 'react-icons/ai'

const HomeCard = ({ img, price, name, location, day }) => { 
    return (

        <div className='Homecard'>
            <div>
            <span  id='heartIcon'><AiOutlineHeart /></span>
                
                <img src={img} alt="pro" />
                <p id='price'>{price}</p>
                <p id='name'>{name}</p>

                <div className='cardBottom'>
                    <p>{location}</p>
                    <p>{day}</p>
                </div>
            </div>

        </div>
    )
}

export default HomeCard