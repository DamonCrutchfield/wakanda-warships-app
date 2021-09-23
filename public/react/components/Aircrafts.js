import React from 'react'



export const Aircrafts = (props) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}><strong>Aircrafts</strong></h1>
            <div>
                
                {
                    props.aircrafts.map((aircraft, index) => {
                        return (
                            <div key={index} style={{justifyContent : "center", textAlign: "center"}}>
                            <img class="card-img-top" style={{"width": "35rem"}} src={aircraft.image} alt="Card image cap"/>
                            <div class="card-body">
                                <p class="card-title"><strong>Name: </strong>{aircraft.name}</p>
                                <p class="card-text"><strong>Description: </strong>{aircraft.description}</p>
                                <p class="card-text"><strong>Role: </strong>{aircraft.role}</p>
                                <p class="card-text"><strong>Type: </strong>{aircraft.type}</p>
                                <p class="card-text"><strong>Model: </strong>{aircraft.model}</p>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

