import React from 'react'
import useReviews from '../../hook/CustomHook'
import { Review } from '../Review/Review'


export const Reviews = () => {
   const[reviews, setReviews]= useReviews()
  return (
    <div className='grid grid-cols-3 gap-3 px-3 py-3'>
      {
        reviews.map(review=><Review
        key={review.id}
        review ={review}
        ></Review>)
      }
    </div>
  )
}
