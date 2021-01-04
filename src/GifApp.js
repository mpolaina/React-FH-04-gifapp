import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifApp = () => {
    
    
    const [categories, setcategories] = useState([''])
    
    return ( 
        <div className="container">
        <h2>GifApp</h2>
        
        <AddCategory
            setcategories={ setcategories }
        />
        
        <ol>
            {
            categories.map( category => (  
                <GifGrid key={ category } category={ category }/>
            ))}
        </ol>
        
        </div>
     );
}
 
export default GifApp;
