import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ImageItem = ({ image: { category, url, name }, match }) => {

    return (
        <div className="container">
        <div className="col s6">
            <div className="card">
                <div className="card-image">
                <img src={url} alt="" className='responsive-img' />
                    <span className="card-title">
                        {category}
                    </span>
                </div>
                <div className="card-content">
                    <span className="blue-text">
                        { window.location.pathname === '/images' ? <Link to={`/images/${name}`}>Explore</Link> : <span className="red-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, vel?</span> }
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired,
}

export default ImageItem
