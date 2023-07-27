import React from 'react'
import './Overlay.css'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { FiArrowUpRight } from 'react-icons/fi'

const Overlay = ({ handleMenuClose }) => {
    return (
        <motion.section className='overlay'>
            <div className="overlay__background"></div>
            <div className="overlay__container container">
                <motion.div className="overlay__list" initial={{ opacity: 0, y: -100, transition: { delay: 0.3, staggerChildren: 3.5, duration: 0.5, ease: [0.42, 0, 0.58, 1] } }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 500, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <ul>
                        <li>
                            <Link to="/" className="hover-link" area-label="Hover Me" cursor-type="button" onClick={handleMenuClose}>
                                <span area-hidden="true">
                                    <span>01 Home<span>01 Home</span></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover-link" area-label="Hover Me" cursor-type="button" onClick={handleMenuClose}>
                                <span area-hidden="true">
                                    <span>02 About<span>02 About</span></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/work" className="hover-link" area-label="Hover Me" cursor-type="button" onClick={handleMenuClose}>
                                <span area-hidden="true">
                                    <span>03 Work<span>03 Work</span></span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover-link" area-label="Hover Me" cursor-type="button" onClick={handleMenuClose}>
                                <span area-hidden="true">
                                    <span>04 Contact<span>04 Contact</span></span>
                                </span>
                            </Link>
                        </li>
                    </ul>
                </motion.div>
                <div className="nav-footer" style={{ position: "absolute", bottom: "10rem",}}>
                    <div className="navbar-social-media">
                        <ul>
                            <li>
                                <Link to="https://www.instagram.com/moazaskar36" target="__blank" rel="noreferrer">
                                    <span>Instagram</span>
                                    <FiArrowUpRight style={{color: "var(--title-color)"}}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/mooaz.askar" target="__blank" rel="noreferrer">
                                    <span>Facebook</span>
                                    <FiArrowUpRight style={{color: "var(--title-color)"}}/>
                                </Link>
                            </li>
                            <li>
                                <Link to="https://wa.me/+201152570233?text=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.%20" target="__blank" rel="noreferrer">
                                    <span>Whatsapp</span>
                                    <FiArrowUpRight style={{color: "var(--title-color)"}}/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__location" style={{left: "0", bottom: "-5rem"}}>
                        <h2>Aswan, Egypt</h2>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Overlay