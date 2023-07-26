import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Work.css'
import Videos from './Data';
const Work = () => {


    const location = useLocation();
    useEffect(() => {
        console.log('Current location:', location.pathname);
    }, [location.pathname]);

    return (
        <section className='work'>
            <div className="work__container container">
                <div className="video-grid">
                    {Videos.map((video) => (
                        <div className="video-item" key={video.id}>
                            <video controls>
                                <source src={video.url} type="video/mp4" />
                                    Your browser does not support the video tag.
                            </video>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work