import { useLocation, NavLink } from "react-router-dom"

import { getPages } from "./page-data"

interface QueryNavLinkProps {
	to: string
}

const QueryNavLink = ({to, ...props}: QueryNavLinkProps) => {
	let location = useLocation()
	return <NavLink to={to + location.search} {...props} />
}

const Pages = () => {
	let pages = getPages()
	return (
		<div>
			<nav>

			</nav>
		</div>
	)
}

export default Pages