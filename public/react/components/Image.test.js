import React, {useState, useEffect} from 'react'
import renderer from 'react-test-renderer'
import { Image } from './Image';

describe("Image component", () => {
  // Snapshot test: Does our Component render as expected?
  test("renders Image component as expected", () => {
	
    const ships = [{name:"aircraft-carrier1", 
					src:"data:image/jpeg;base64,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",
					type: "Bomb carrier"
					},
					{name:"aircraft-carrier2", 
					src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5HldwxhBXX0EskwCZxYvdjZgBGNRCwXqrg&usqp=CAU",
					type: "Stealth carrier"
					},
					{name:"aircraft3", src:"https://www.wearethemighty.com/app/uploads/legacy/assets.rbl.ms/18139450/origin.jpg",
					type: "Attack carrier"
					}]

	
    const component = renderer.create(<Image ship={[]} aircrafts={[]}/>)

    const snapshot = component.toJSON();

    console.log("What does our snapshot look like?  ", snapshot)

    expect(snapshot).toMatchSnapshot();
  })
  test("Image showDetails function works as expected", () => {
	
    const ships = [{name:"aircraft-carrier1", 
					src:"data:image/jpeg;base64,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",
					type: "Bomb carrier"
					},
					{name:"aircraft-carrier2", 
					src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5HldwxhBXX0EskwCZxYvdjZgBGNRCwXqrg&usqp=CAU",
					type: "Stealth carrier"
					},
					{name:"aircraft3", src:"https://www.wearethemighty.com/app/uploads/legacy/assets.rbl.ms/18139450/origin.jpg",
					type: "Attack carrier"
					}]
	const stub = () => 'clicked!!!';
	
    const component = renderer.create(<Image ship={[]} aircrafts={[]} showDetails={stub}/>)

   
	 //Let's unspool the tree
	 const treeEl = component.toTree()

	 //console.log("What does our tree look like?", treeEl);
 
	 expect(treeEl.props.showDetails()).toBe('clicked!!!');

  })

})