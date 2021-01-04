
export const getGifs = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=m6y0jUxGLNxtSgUQSOOySmmWWkBp0hq9&q=${ encodeURI(category) }&limit=10&offset=&rating=g&lang=es`
    const resp = await fetch( url )
    const { data } = await resp.json()
    
    const gifs = data.map( img => {
        // de cada img retornamos un objeto con las siguientes propiedades
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs
    
}