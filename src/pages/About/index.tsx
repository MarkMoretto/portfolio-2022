import { Link, Route, useRouteMatch } from "react-router-dom"
import RouterPage from "../RouterPage"

const About = () => {
	const { url, path } = useRouteMatch()
	return (
		<div>
			<ul>
				<li>
					<Link to={`${url}/about-author`}>Author</Link>
				</li>
				<li>
					<Route path={`${path}/:pageSlug`}>
						<RouterPage	/>
					</Route>
				</li>
			</ul>
		</div>
	)
}

export default About