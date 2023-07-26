import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Overlay from './overlay/Overlay';

const Navbar = ({ navOpen, setNavOpen, handleMenuClose }) => {
    const toggleRotation = () => {
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        if (navOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [navOpen]);

    return (
        <nav className='nav'>
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
                <Link className='nav__right' onClick={() => {
                    toggleRotation();
                }}>
                    <div className={`menu__dots ${navOpen ? 'rotated' : ''}`}>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div>
                </Link>
                <div
                    className='nav-overlay'
                    style={{
                        top: navOpen ? '0' : '-150%',
                        transitionDelay: navOpen ? '0s' : '0s',
                    }}
                >
                    <Overlay />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
