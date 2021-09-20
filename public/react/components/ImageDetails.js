import React from 'react'

export const ImageDetails = (props) => {
    return (
        <div className="main-gallery-img-div">
            <img className="main-gallery-img" src={props.src} />
            <h6>Details</h6>
            <h6>Image</h6>
        </div>
    )
}