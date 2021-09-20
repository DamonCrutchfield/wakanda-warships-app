import React from 'react'
import Image from './Image'
import { Header } from './Header'

export const Aircrafts = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}><strong>Aircrafts</strong></h1>
            <div>
                
                {
                    props.aircrafts.map((aircraft, index) => {
                        return (
                            <div key={index} className="main-gallery" style={{"width": "18rem"}}>
                                <div className="main-gallery-img-div">
                                    <img className="main-gallery-img" src={aircraft.image} alt="Card image cap"/>
                                    <h6>Name: {aircraft.name}</h6>
                                    <p>Description: {aircraft.description}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}