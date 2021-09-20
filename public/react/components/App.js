import React, { useState, useEffect } from 'react'
import { Header } from './Header'
import { MainGallery } from './MainGallery'
import { Image } from './Image';

import { Aircrafts } from './Aircrafts';
import { Partners } from './Partners';
import { FAQ } from './FAQ';
import { Help } from './Help'
import { About } from './About';

import {Route, Switch} from 'react-router-dom';
import wakandaImage1 from "../../images/wakanda-aircraft-carrier1.jpg"
import wakandaImage2 from "../../images/wakanda-aircraft-carrier2.jpg"
import wakandaImage3 from "../../images/wakanda-aircraft-carrier3.jpg"



export const App = () => {
	const [aircrafts, setAircrafts] = useState([])

	async function fetchAircrafts() {
		try {
			const response = await fetch('http://localhost:3000/aircrafts');
			const responseJSON = await response.json();
			setAircrafts(responseJSON)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchAircrafts()
	}, []);
	return (
		<div>
			<Header />
			<Route exact path="/">
				<MainGallery>
					<Image src={wakandaImage1} />
					<Image src={wakandaImage2} />
					<Image src={wakandaImage3} />
				</MainGallery>
			</Route>
			<Route exact path="/aircrafts">
				<Aircrafts aircrafts={aircrafts} />
			</Route>
			<Route path="/about">
				<About />
			</Route>
			<Route path="/FAQ">
				<FAQ />
			</Route>
			<Route path="/help">
				<Help />
			</Route>
			<Route path="/partners">
				<Partners />
			</Route>
		</div>
	)
}
