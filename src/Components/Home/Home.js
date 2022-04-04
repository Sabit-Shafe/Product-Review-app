
import React from 'react'
import { Review1 } from '../Review1/Review1'
import { Reviews } from '../Reviews/Reviews'
// import {HomeReviews} from '../HomeReviews/HomeReviews'

// import { Container, Grid, Typography, Button} from "@mui/material";

export const Home = () => {
  return (
    <div>
      <div className='flex'>
        <div className=''>
          <h1 className='text-green-500 font-serif font-large text-6xl py-5 px-9 '>Your Next Product <br></br>
            your best Product
          </h1>
          <p className='px-9'>
            There are two types of sellers online. Those who copy the descriptions of the product from the manufacturer and those who write the product description themselves. The problem with the former is that you can have a Google search penalty placed against you. This is more of a risk if you have a large catalog of products, all with copied descriptions.
          </p>
          <div className='px-8 py-7'>
            <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Live Demo</button>
          </div>
        </div>
        <div>
          <img className='px-5 py-5' src='https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'></img>
        </div>
      </div>
      <div>
        {/* <HomeReviews></HomeReviews> */}
        {/* <Reviews></Reviews> */}
        <Review1></Review1>
        

      </div>
    </div>
  )
}
