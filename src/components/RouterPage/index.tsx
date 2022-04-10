import { Fragment } from "react"
import { Outlet } from "react-router-dom"

const RouterPage = () => {
	return (
		<Fragment>
			<div className="container">
				<Outlet />
			</div>
		</Fragment>
	)
}

export default RouterPage
