import React from 'react'
import Main from '../main/Main'

const SiteHome = ({location, isTablet, isMobile}) => {
    return (
        <>
            <Main  location={location}  isTablet={isTablet} isMobile={isMobile}/>
        </>
    )
}

export default SiteHome