import React from "react"

interface WrapperProps {
	children: React.ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
	return (
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
	)
}

export default Wrapper
