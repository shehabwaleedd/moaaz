import React from 'react'
import styles from "./style.module.scss"
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'
import beat from "../../assets/videos/tribal-drums-african-rhythm-ethnic-percussion-typographic-music-125773.mp3"
import { motion } from "framer-motion"
import { BiSolidMusic } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import background from "../../assets/DSC_8267-1.avif"
import video1 from "../../assets/videos/1.mp4"


const Main = () => {

    const location = useLocation();
    useEffect(() => {
        console.log('Current location:', location.pathname);
    }, [location.pathname]);
    const [isPlaying, setIsPlaying] = useState(false);

    // Reference to the audio element
    const audioRef = useRef(null);


    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(prevIsPlaying => !prevIsPlaying);
    };

    return (
        <main className={styles.main}>
            <div className={styles.main__container}>
                <motion.div className={styles.main__container__upper}>
                    <motion.h1 >MOAAZ ASKAAR</motion.h1>
                    <motion.h2>NUBIAN PERCUSSIONIST</motion.h2>
                </motion.div>
                <div className={styles.main__container_image}>
                    <img src={background} alt="background" />
                </div>
            </div>

            <div className={styles.main__container__lower}>
                <motion.p>
                    Moaaz Askaar is a Nubian percussionist, born in Aswan, Egypt. He is a member of Raina band, which is a Egyptian band that plays Algerian music and North African rhythms and  he is a member of the "Mualwia" band, which is a band that Sufi music. .
                </motion.p>
            </div>
            <div className={styles.main__container__events}>
                <div className={styles.main__container__events_upper}>
                    <motion.p>Events</motion.p>
                </div>
                <div className={styles.main__container__events_lower}>
                    <ul>
                        <li>Sufi Sutra Festival, India, 2024</li>
                        <li>Soundfeast Festival, United Arab Emirates, 2024</li>
                        <li>the International Festival of Sufi Music, Morocco, 2023</li>
                        <li>Collaboration with Ragheb Alama in "Al-Hayat" video, 2021</li>
                        <li>Participation in Mohamed Mounir's "I am Egypt" clip for the Mummies' Processions, 2021</li>
                        <li>Performances at the State Theater as an actor in various theatrical plays</li>
                        <li>Collaboration with Asala Nasri in "Alam Yallah Qaloub" clip, 2017</li>
                    </ul>
                </div>

                <div className={styles.main__container__videos}>
                    <div className={styles.main__container__videos__left}>
                        <motion.p>Videos</motion.p>
                        <Link to="/videos">See All</Link>
                    </div>
                    <video src={video1} autoPlay loop controls playsInline className={styles.main__container__videos__video}></video>
                </div>

            </div>

            <audio ref={audioRef} src={beat} loop />
        </main>
    )
}

export default Main

//  <div className={`circle__inner ${isPlaying ? 'waves' : ''}`}>
//                             <BiSolidMusic style={{ fontSize: "3.3rem" }} />
//                         </div>