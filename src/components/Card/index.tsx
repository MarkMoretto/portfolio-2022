import React, { Fragment } from "react"

import "./Card.module.scss"

interface ICardContent {
	cardTitle: string
	cardSubtitle?: string
	readMoreLink?: {
		url: string
		label: string		
	}
}








interface ICardWrapper extends ICardContent {
	children: React.ReactNode
}

const Card = ({ children, ...args }: ICardWrapper) => {
	return (
		<Fragment>
			<div className="card light">
				{children}
			</div>
		</Fragment>
	)
}


export default Card