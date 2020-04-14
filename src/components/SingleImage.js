import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router'
import NotFound from './NotFound'
import ImageItem from './ImageItem'

const SingleImage = ({ images }) => {

    const { slug } = useParams();

    const image = images.find(image => image.name === slug);

    if(!image){
        return <NotFound />
    }

    else if(image) {
        return <ImageItem image={image} />
    }


    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}

SingleImage.propTypes = {
    images: PropTypes.array.isRequired,
}

export default SingleImage
