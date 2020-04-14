import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="pink">
            <Link to='/' className='brand-logo center'>React Router V6</Link>
            <ul className="right">
                <li><Link to='/images'>Images</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
