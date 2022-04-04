
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hook/CustomHook';
import { Review } from '../Review/Review';
import { Reviews } from '../Reviews/Reviews';

export const Review1 = () => {
    const [reviews, setReviews] = useReviews()
    let navigate = useNavigate();
    return (
        <div>
            <div className='grid grid-cols-3 gap-3 px-3 py-3'>
                {
                    reviews.slice(0, 3).map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='px-8 py-7'>
                <button type="button" className=' focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' onClick={()=>navigate('/reviews')}>See all Reviews</button>
            </div>
        </div>
    )
}
