import React from 'react';
import { Image } from './Image';
import { useState } from 'react';



	

export const MainGallery = (props) => {
        const [ships, setShips] = useState(props.ships)
        const [selected, setSelected] = useState(null)

        function handleSelect(ship, single){
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
                                
                            selected ? <Image ship={selected} aircrafts={props.aircrafts} single={true} handleSelect={handleSelect} /> : ships.map((ship, index) => <Image ship={ship} aircrafts={props.aircrafts} single={false} key={index} handleSelect={handleSelect} src={ship} />)         
                                
                        }
                    </section>
                </div>
            </main>
        </div>
    )
}
