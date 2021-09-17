import React from 'react'
import { Header } from './Header'
import { MainGallery } from './MainGallery'
import { Image } from './Image';
import wakandaImage1 from "../../images/wakanda-aircraft-carrier1.jpg"
import wakandaImage2 from "../../images/wakanda-aircraft-carrier2.jpg"
import wakandaImage3 from "../../images/wakanda-aircraft-carrier3.jpg"



export const App = () => {
	return (
		<div>
			<Header />
			<MainGallery>
				<Image src={wakandaImage1} />
				<Image src={wakandaImage2} />
				<Image src={wakandaImage3} />
			</MainGallery>
		</div>
	)
}
