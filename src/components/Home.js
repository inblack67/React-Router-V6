import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container center">
            <p className="flow-text">V6 is cool</p>
            <Link to='/images' className='btn grey darken-2'>Explore Gallery</Link>
        </div>
    )
}

export default Home
