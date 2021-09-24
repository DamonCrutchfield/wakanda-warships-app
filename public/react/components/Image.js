import React, { useState } from "react";
import {
    Redirect,
    Switch, Route, Link
  } from 'react-router-dom'
export const Image = (props) => {

    console.log("props in image", props)
    
    

    const [details, setDetails] = useState(null)

    const showDetails = () => {
        setDetails(details)
    }

    const hideDetails = () => {
        setDetails(null)
    }

    return (
        <div className="main-gallery-img-div">
                 <div>
                    <img onClick={!details ? showDetails: hideDetails} 
                    className="main-gallery-img" style={{display:"flex", justifyContent:"center"}}
                    src={props.ship.src} alt="aircraft carrier image"/>
                   Name: {props.ship.name} 
                   <br/>
                   Number of Aircrafts: {props.aircrafts.length}

                </div>
                <br/>
                <div style={{display:"flex", justifyContent:"center"}}>
                 <button onClick={() => props.handleSelect(props.ship, props.single)}>Click to See/Clear</button> 
                </div>
		</div>

    )
}