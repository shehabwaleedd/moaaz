import React from 'react'
import './Main.css'
import main from "../../assets/moaz.png"
import {BiSolidMusic}   from 'react-icons/bi'
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react'

const Main = () => {

    const location = useLocation();
    useEffect(() => {
        console.log('Current location:', location.pathname);
    }, [location.pathname]);
    return (
        <main className='main'>
            <div className="main__background">
                <motion.div className="col1" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <div className="col1__bottom__left">
                        <h3>As an authentic nubian PERCUSSIONIST, I focus on producing top-notch and impactful beats and rythms that always stand out.</h3>
                    </div>
                </motion.div>
                <motion.div className="col2" initial={{ opacity: 1, width: "200vw", transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, width: "37vw", transition: { delay: 0.2, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 1, width: "200vw", transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1.3, ease: [0.42, 0, 0.58, 1] } }}></motion.div>
                <div className="col3">
                <motion.div className="col3__bottom__right" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                        <h3>A Cutting Edge Musical Expiernce Designed to revolutionize the way people interact with african beats and rythms</h3>
                        <h3>Exceptional African Experience and Authentic Egyptian Vibes</h3>
                    </motion.div>
                </div>
            </div>
            <div className="main__container">
                <motion.div className="main__title" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <motion.h1 initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>MOAAZ ASKAAR</motion.h1>
                    <motion.h2 initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>NUBIAN PERCUSSIONIST</motion.h2>
                </motion.div>
                <div className="main__image">
                    <motion.img src={main} alt="" initial={{ opacity: 0, y: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}/>
                    <motion.div className="image__circle " initial={{ opacity: 0, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}>
                        <div className="circle__inner rotate">
                            <BiSolidMusic style={{fontSize: "3.3rem"}}/>
                        </div>
                    </motion.div>
                </div>
                <div className="bottom__container">

                </div>
            </div>
        </main>
    )
}

export default Main