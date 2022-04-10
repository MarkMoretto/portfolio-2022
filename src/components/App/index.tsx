import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"

import "./App.module.css"

import Layout from "../Layout"
import Home from "../Home"
import About from "../About"
import Pages from "../Pages"
import ActivePage from "../../pages/ActivePage"
import PageNotFound from "../../pages/PageNotFound"

const App = () => {
	return (
		<Fragment>
			<Routes>
				<Route path="/" element={<Layout />}>

					<Route path="/" element={<Home />} />

					<Route path="/pages" element={<Pages />}>
						<Route path=":pageSlug" element={<ActivePage />} />
					</Route>

					<Route path="/about" element={<About />} />
					<Route path="" element={<PageNotFound />} />
				</Route>
			</Routes>
		</Fragment>
	)
}

export default App
