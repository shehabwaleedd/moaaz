import React from 'react'
import main from "../../assets/moaz.avif"
import { useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react'
import beat from "../../assets/videos/tribal-drums-african-rhythm-ethnic-percussion-typographic-music-125773.mp3"
import MobileResponsive from './mainResponsive/mobileResponsive/MobileResponsive';
import TabletResponsive from './mainResponsive/tabletResponsive/TabletResponsive';
import DesktopResponsive from './mainResponsive/desktopResponsive/DesktopResponsive';

const Main = ({ isMobile, isTablet }) => {

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
        <>
            {isMobile ? (
                <MobileResponsive main={main} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} toggleMusic={toggleMusic} beat={beat} />
            ) : isTablet ? (
                <TabletResponsive main={main} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} toggleMusic={toggleMusic} beat={beat} />
            ) : ( 
                <DesktopResponsive isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} toggleMusic={toggleMusic} beat={beat} />
            )}
        </>
    )
}

export default Main