import React, { useEffect } from 'react';
import MobileNavbar from './navbarResponsive.jsx/mobileNavbar/MobileNavbar';
import DesktopNavbar from './navbarResponsive.jsx/desktopNavbar/DesktopNavbar';

const Navbar = ({ navOpen, setNavOpen, handleMenuClose, setIsMobile, setIsTablet, isTablet, isMobile }) => {
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
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 468);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsTablet(window.innerWidth <= 968);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className='nav'>
            {isMobile ? (
                <MobileNavbar isMobile={isMobile} navOpen={navOpen} setNavOpen={setNavOpen} handleMenuClose={handleMenuClose}toggleRotation={toggleRotation}/>
            ) : (
                <DesktopNavbar isMobile={isMobile} navOpen={navOpen} handleMenuClose={handleMenuClose} toggleRotation={toggleRotation}/>
            )}
        </nav>

    );
};

export default Navbar;
