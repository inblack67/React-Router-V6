import React from 'react'
import PropTypes from 'prop-types'
import ImageItem from './ImageItem'

const Gallery = ({ images }) => {
    return (
        <div className="row">
            { images.map(image => (
                <ImageItem image={image} key={image.id} />
            )) }
        </div>
    )
}

Gallery.propTypes = {
    images: PropTypes.array.isRequired,
}

export default Gallery
