import React from 'react'
import { Header } from './Header'

export const About = () => {
    return (
        <div >
            <div className="page-header">
                <h1>About</h1>
            </div>
            <blockquote className="blockquote text-center">
                <p id="about-us" className="mb-0">
                There are three main aircraft in Wakanda: Talon Fighters, 
                which are like fighter jets; Dragon Flyers, biomimetically designed helicopters that look like dragonflies; and the Royal Talon Fighter, T'Challa's version of Air Force One.

                </p>
            </blockquote>
        </div>
    )
}