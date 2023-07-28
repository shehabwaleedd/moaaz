import React from 'react'
import { Link } from 'react-router-dom'
import Overlay from '../../overlay/Overlay'
import './DesktopNavbar.css'

const DesktopNavbar = ({ navOpen, handleMenuClose, toggleRotation, isMobile }) => {
    return (
        <div className='nav__container'>
            <Link to='/work' className='nav__left hover-link' onClick={handleMenuClose}>
                <span area-hidden="true">
                    <span>View <span>View</span></span>
                    <span>Work <span>Work</span></span>
                </span>
            </Link>
            <Link to='/' className='nav__middle' onClick={handleMenuClose}>
                <h1>Moaaz</h1>
            </Link>
            <div className='nav__right' onClick={() => { toggleRotation(); }}>
                <div className={`menu__dots ${navOpen ? 'rotated' : ''}`}>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                    <div className='dot'></div>
                </div>
            </div>
            <div
                className='nav-overlay'
                style={{ top: navOpen ? '0' : '-150%', transitionDelay: navOpen ? '0s' : '0s', }}>
                <Overlay handleMenuClose={handleMenuClose} isMobile={isMobile}/>
            </div>
        </div>
    )
}

export default DesktopNavbar