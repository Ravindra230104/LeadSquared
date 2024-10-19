import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import './HardFetch.css';

const HardFetch = () => {
    const [imageData, setImageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(10);
    const [hasMore, setHasMore] = useState(true);

    const fetchImages = async () => {
        if (loading) return;  

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc`);
            const data = await response.json();

            if(data.length === 0) 
            {
                setHasMore(false); 
            } 
            else
            {
                setImageData((prevData) => [...prevData, ...data]);
                setPage((prevPage) => prevPage + 1);  
            }
        } 
        catch(err){
            setError('Error while fetching images.');
        } 
        finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();  
    }, []);  

    return (
        <div className='image'>
            <h1>Cat Images</h1>
            {error && <p>{error}</p>}
            {loading && <img src="/loader.gif" alt="Loading..." className='loading' />}

            <InfiniteScroll
                dataLength={imageData.length}
                next={fetchImages}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                endMessage={<p>No more images to load</p>}
            >
                <div className='card-container'>
                    {imageData.map((image) => (
                        <div key={image.id} className='card'>
                            <img src={image.url} alt="Cat" />
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default HardFetch;
