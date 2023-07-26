import React from 'react'
import './Overlay.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Overlay = () => {
    return (
        <motion.section className='overlay'>
            <div className="overlay__background"></div>
            <div className="overlay__container container">
                <motion.div className="overlay__list" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <ul>
                        <li>
                            <Link to="/" class="hover-link" area-label="Hover Me" cursor-type="button">
                                <span area-hidden="true">
                                    <span>01 Home<span>01 Home</span></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" class="hover-link" area-label="Hover Me" cursor-type="button">
                                <span area-hidden="true">
                                    <span>02 About<span>02 About</span></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" class="hover-link" area-label="Hover Me" cursor-type="button">
                                <span area-hidden="true">
                                    <span>03 Work<span>03 Work</span></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" class="hover-link" area-label="Hover Me" cursor-type="button">
                                <span area-hidden="true">
                                    <span>04 Contact<span>04 Contact</span></span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Overlay