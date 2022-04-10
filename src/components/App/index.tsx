import { Fragment } from "react"
import { Route, Switch } from "react-router-dom"

import "./App.module.css"

import Navbar from "../Navbar"
import Home from "../Home"
import About from "../About"

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
			</Switch>
		</Fragment>
	)
}

export default App
