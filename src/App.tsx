import React from "react"
// https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import './App.css';

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<div>
				<div>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>					
						</ul>
					</nav>
				</div>

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
				</Switch>

			</div>
		</React.Fragment>
	);
}

export default App
