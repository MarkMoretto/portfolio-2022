import { Link, Route, useMatch } from "react-router-dom"
import RouterPage from "../../components/RouterPage"




const Page = () => {
	// const { url, path } = useMatch()
	return (
		<div>
			{/* <ul>
				<li>
					<Link to={`${url}/about-author`}>Author</Link>
				</li>
				<li>
					<Route path={`${path}/:pageSlug`}>
						<RouterPage	/>
					</Route>
				</li>
			</ul> */}
		</div>
	)
}

export default Page