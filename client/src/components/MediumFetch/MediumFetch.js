import React from 'react';
import {useState, useEffect} from 'react';
import './MediumFetch.css'


const MediumFetch = () => {
    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null);  
    const [currentPage, setCurrentPage] = useState(1);
  
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

    useEffect(() => {
        fetchImage();
    },[currentPage]);

    const handlePrevious = () => {
        setCurrentPage((prevPage) => Math.max(1,prevPage-1));
    };

    const handleNext = () => {
        setCurrentPage((prevPage) => 1+prevPage);
    }

    return(
        <div className='image'>
            <h1>Cat Images</h1>

            {loading && <p>Loading...</p>}  

            {error && <p>{error}</p>} 
            
            <div className='grid'>
              {imageData.map((image) => (
                <div key={image.id} className='grid-item'>
                    <img src={image.url} alt="not found" />
                </div>
              ))}
            </div>

            <div className='pagination'>
                 <button onClick={handlePrevious} disabled={currentPage===1}>Previous</button>
                 <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default MediumFetch;