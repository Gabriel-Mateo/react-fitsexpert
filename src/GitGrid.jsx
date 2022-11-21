
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { GifItem } from './GifItem';
import { getGits } from './helpers/getGits'
import { useFetchGits } from './hooks/useFetchGits';

export const GitGrid = ({ category}) => {
  const { image, isLoading } = useFetchGits(category);

  console.log(isLoading);
  
 /* const getImages = async () => {
       const newImages = await getGits(category);
       setimagen(newImages);
     }

  useEffect( () => { 
    getImages();
  },[])*/

   return (
        <>
        <h3>{category}</h3>
            
        <div className='card-grid '>
          {
            image.map((image) => (
             
              <GifItem
                key={image.id}
                {...image}
                />
            ))
          }
        </div>
        </>
  )
}
