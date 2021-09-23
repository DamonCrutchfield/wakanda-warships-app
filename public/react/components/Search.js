import React from 'react'

//Create search component that displays the search results to the UI
export const Search = (props) => {
    return (
        <div>
            <img class="card-img-top" style={{"width": "25rem"}} src={props.aircraft.image} alt="Card image cap"/>
            <div class="card-body">
                <h5 class="card-title">Name:{props.aircraft.name}</h5>
                <p class="card-text">{props.aircraft.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">{props.aircraft.role}</li>
                <li class="list-group-item">{props.aircraft.type}</li>
                <li class="list-group-item">{props.aircraft.model}</li>
            </ul>
            
        </div>
    )
}