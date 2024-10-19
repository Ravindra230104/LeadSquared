import React from 'react';
import {useState} from 'react';
import './EasyFetch.css'


const EasyFetch = () => {
    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null);   
  
    const fetchImage = async () => {
      setLoading(true);  
      setError(null);   
  
      try{
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc');
        const data = await response.json();
        setImageData(data);   
      } 
      catch(err){
        setError('Error while fetching image.',err);
      }
      setLoading(false);   
    };
    return(
        <div className='image'>
            <button onClick={fetchImage} className='button'>Fetch Image</button>

            {loading && <p>Loading...</p>}  

            {error && <p>{error}</p>} 
            
            {imageData.length === 0  && <p>No images found.</p>}
            
            <div className='grid'>
              {imageData.map((image) => (
                <div key={image.id} className='grid-item'>
                    <img src={image.url} alt="not found" />
                </div>
              ))}
            </div>
        </div>
    )
}

export default EasyFetch;