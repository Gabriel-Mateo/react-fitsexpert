
import React from 'react'
export const GifItem = ({url, title }) => {
    return (     
                <div className='card' >
                  <li >{title}</li>
                 <img src={url} width="200px" height="300px"/>
                </div>
 )
}
