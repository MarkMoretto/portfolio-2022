
// https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-all-switch-elements-to-routes
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import './App.css';

import Home from "./components/Home"
import About from "./components/About"

function App() {
	return (
		<div className="App">
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
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />					
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
