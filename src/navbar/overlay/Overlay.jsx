import React from 'react'
import MobileResponsive from './overlayResponsive/mobileResponsive/MobileResponsive'
import DesktopResponsive from './overlayResponsive/desktopResponsive/DesktopResponsive'

const Overlay = ({ handleMenuClose, isMobile }) => { return ( <> { isMobile ? ( <MobileResponsive handleMenuClose={handleMenuClose} /> ) : ( <DesktopResponsive handleMenuClose={handleMenuClose} />)}</>) }

export default Overlay