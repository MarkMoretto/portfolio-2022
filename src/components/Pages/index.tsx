import { Fragment } from "react"
import { useLocation, NavLink, Outlet } from "react-router-dom"
import { getPages } from "../../classes/about"

// import styles from "./Pages.module.css"

interface QueryNavLinkProps {
	children: string
	to: string
}

const QueryNavLink = ({to, ...props}: QueryNavLinkProps) => {
	let location = useLocation()
	return <NavLink to={to + location.search} {...props} />
}

const Pages = () => {
	let pages = getPages()

	return (
		<Fragment>
			<nav>
				{pages.map(pg => (
					<QueryNavLink key={pg.pageId} to={`/pages/${pg.pageSlug}`}>
						{pg.title ? pg.title : ""}
					</QueryNavLink>					
				))
				}
			</nav>
			<Outlet />
		</Fragment>
	)
}

export default Pages