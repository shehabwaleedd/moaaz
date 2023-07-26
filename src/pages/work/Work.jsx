import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import './Work.css'
import Videos from './Data';
import video from "../../assets/videos/1.mp4"
import { motion } from "framer-motion";
const Work = () => {


    const location = useLocation();
    useEffect(() => {
        console.log('Current location:', location.pathname);
    }, [location.pathname]);

    return (
        <motion.section className='work'>
            <motion.div className="video__background" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                <motion.h1 initial={{opacity: 0, transition: {delay: 1}}} animate={{opacity: 1}} exit={{opacity: 0}}>My WORK</motion.h1>
                <video src={video} autoPlay muted loop />
            </motion.div>
            <div className="work__container">
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
        </motion.section>
    )
}

export default Work