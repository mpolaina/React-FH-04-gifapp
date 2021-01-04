import React from 'react'
import { useFecthGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
     
    const { data: images, loading } = useFecthGifs( category )
    
    return (
        <>
            <h3 className="animate__animated animate__fadeIn mt-3">{ category }</h3>
            
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-3">
                    
                    { 
                        images.map( img => (
                            
                            <GifItem 
                                key={ img.id}
                                { ...img }
                            />
                        ))
                    }
                
            </div>
        </>
    )
}
