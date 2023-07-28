import React from 'react'
import { Link } from 'react-router-dom'
import Overlay from '../../overlay/Overlay'
import './MobileNavbar.css'


const MobileNavbar = ({ navOpen, handleMenuClose, toggleRotation, isMobile }) => {
    return (
        <div className='nav__container-mobile'>
            <Link to='/work' className='nav__left-mobile hover-link' onClick={handleMenuClose}>
                <span>View Work</span>
            </Link>
            <Link to='/' className='nav__middle-mobile' onClick={handleMenuClose}>
                <h1>Moaaz</h1>
            </Link>
            <div className='nav__right-right' onClick={() => { toggleRotation(); }}>
                <div className={`menu__dots ${navOpen ? 'rotated' : ''}`}>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>
            <div className='nav-overlay'
                style={{ top: navOpen ? '0' : '-150%', transitionDelay: navOpen ? '0s' : '0s', }}>
                <Overlay handleMenuClose={handleMenuClose} isMobile={isMobile}/>
            </div>
        </div>
    )
}

export default MobileNavbar