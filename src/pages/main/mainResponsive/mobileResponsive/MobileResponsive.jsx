import React from 'react'
import './MobileResponsive.css'
import { motion } from 'framer-motion'
import { BiSolidMusic } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'


const MobileResponsive = ({ isPlaying, setIsPlaying, audioRef, toggleMusic, beat, main }) => {
    return (
        <main className='main'>
            <div className="main__background">
                <motion.div className="col1" >
                </motion.div>
                <motion.div className="col2" initial={{ opacity: 0, width: "40vw", transition: { staggerChildren: 3.5, duration: 0.1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, width: "40vw", transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, width: "40vw", transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}></motion.div>
                <div className="col3">
                </div>
            </div>
            <div className="main__container-mobile">
                <motion.div className="main__title-mobile">
                    <motion.h1 initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>MOAAZ ASKAAR</motion.h1>
                    <motion.h2 initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>NUBIAN PERCUSSIONIST</motion.h2>
                </motion.div>
                <div className="main__text-container">
                    <motion.h3 initial={{ opacity: 0, x: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, x: -500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>As an authentic nubian PERCUSSIONIST, I focus on producing top-notch and impactful beats and rythms that always stand out.</motion.h3>
                    <motion.h3 initial={{ opacity: 0, x: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, x: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>A Cutting Edge Musical Expiernce Designed to revolutionize the way people interact with african beats and rythms</motion.h3>
                    <motion.h4 initial={{ opacity: 0, x: 100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, x: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>Exceptional African Experience and Authentic Egyptian Vibes</motion.h4>
                </div>
                <div className="main__image-mobile">
                    <motion.div initial={{ opacity: 0, transition: { delay: 0.3, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, transition: { delay: 0.5, staggerChildren: 3.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, transition: { velocity: 2, staggerChildren: 1.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }}
                        className="image__circle-mobile"
                        onClick={toggleMusic}>
                        <div className={`circle__inner ${isPlaying ? 'waves' : ''}`}>
                            <BiSolidMusic style={{ fontSize: "1.3rem" }} />
                        </div>
                    </motion.div>
                </div>
                <div className="bottom__container">
                    <Link to="/contact" className="lets__talk">
                        <button>Let's Talk <BsArrowRight style={{ fontSize: "2rem" }} /></button>
                    </Link>
                </div>
            </div>
            <audio ref={audioRef} src={beat} loop />
        </main>
    )
}

export default MobileResponsive