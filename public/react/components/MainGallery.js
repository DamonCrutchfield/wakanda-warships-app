import React from 'react';
import { Image } from './Image';
import { useState } from 'react';
import {Link, Route} from 'react-router-dom'



	

export const MainGallery = (props) => {
        const [ships, setShips] = useState(props.ships)
        const [selected, setSelected] = useState(null)

        function handleSelect(ship){
            if(ship instanceof Object){
                setSelected(ship)
            } else {
                setSelected(null)
            }
            
        }
	
    return (
        <div>
            <main className="main">
                <div className="main-gutter">
                    <section className="main-gallery">
                        {
                                
                                    
                            selected ? <Image ship={selected} /> : ships.map((ship, index) => <Image ship={ship} key={index} handleSelect={handleSelect} src={ship} />)
                                    
                                
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}
