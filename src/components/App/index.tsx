import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"

import "./App.module.css"

import Layout from "../Layout"
import Home from "../Home"
import About from "../About"
import Pages from "../Pages"
import PageNotFound from "../../pages/PageNotFound"

const App = () => {
	return (
		<Fragment>
			<Route path="/" element={<Layout />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pages" element={<Pages />} />
					<Route path="/about" element={<About />} />
					<Route path="" element={<PageNotFound />} />
				</Routes>
			</Route>
		</Fragment>
	)
}

export default App
