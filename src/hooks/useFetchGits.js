import React, { useEffect, useState } from 'react'
import { getGits } from '../helpers/getGits';

export const useFetchGits = ( category ) => {

    const [image, setImage] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    
    const getImages = async () => {
        const newImages = await getGits( category );
        setImage(newImages);
        setisLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])
    return {
        image,
        isLoading
     
}
}
