import React from 'react';
import { Image } from './Image';
import { useState } from 'react';
import {Link, Route} from 'react-router-dom'



	

export const MainGallery = (props) => {
        const [ships, setShips] = useState(props.ships)
        const [selected, setSelected] = useState(null)
        const [single, setSingle] = useState(true)

        function handleSelect(ship, single){
            console.log("what is Props.single?", single)
            if(single){
                console.log('what is single?')
                setSelected(null)
            } else {
                console.log('what is?')
                setSelected(ship)
            }
        }
        
	
    return (
        <div>
            <main className="main">
                <div className="main-gutter">
                    <section className="main-gallery">
                        {
                                
                            selected ? <Image ship={selected} single={true} handleSelect={handleSelect} /> : ships.map((ship, index) => <Image ship={ship} single={false} key={index} handleSelect={handleSelect} src={ship} />)         
                                
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}
