import React from 'react'
import {PiDotsNine} from 'react-icons/pi'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="nav__container">
                <Link to="/work" className="nav__left">
                    <h1>View Work</h1>
                </Link>
                <Link to="/" className="nav__middle">
                    <h1>Moaaz Askar</h1>
                </Link>
                <Link to="/overlay" className="nav__right">
                    <PiDotsNine style={{
                        fontSize: '2.2rem',
                        color: 'var(--title-color)'
                    }}/> 
                </Link>
            </div>
        </nav>
    )
}

export default Navbar