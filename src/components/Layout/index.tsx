import { Fragment } from "react"
import { Outlet } from "react-router-dom"

import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = () => {
	return (
		<Fragment>
			<Navbar />
			<Outlet />
			<Footer />
		</Fragment>
	)
}

export default Layout