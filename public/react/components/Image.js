import React from "react";

export const Image = (props) => {
    return (
        <div className="main-gallery-img-div">
            <img className="main-gallery-img" src={props.src} />
            <h6>Name</h6>
            <h6>Location</h6>
        </div>
    )
}