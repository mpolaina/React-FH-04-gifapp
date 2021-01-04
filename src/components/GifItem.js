import React from 'react'

export const GifItem = ({ title, url }) => {
    
    return (
        <div className="col">
            <div className="card animate__animated animate__fadeIn">
                <img src={ url } alt={ title }/>
                <div className="card-body py-2">
                    <p className="mb-0">{ title }</p>
                </div>    
            </div>
        </div>
    )
}
