import React, { Fragment } from "react"

import "./Card.module.scss"

interface WrapperProps {
	children: React.ReactNode
}

const Card = ({ children }: WrapperProps) => {
	return (
		<Fragment>
			<div
				style={{
					backgroundColor: "purple",
					color: "white",
					display: "flex",
					flexDirection: "column",
					padding: "5rem",
					fontSize: "3rem"
				}}
			>
				{children}
			</div>
		</Fragment>
	)
}


export default Card