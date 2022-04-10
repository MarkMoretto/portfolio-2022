import React from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router } from "react-router-dom"
import "./index.css"
import App from "./components/App"

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
)
