// import { useState, useEffect } from "react"
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
	// const [isActive, setIsActive ] = useState(false)
	let pages = getPages()
	// useEffect(() => {
	// 	setIsActive(prevState => !prevState)
	// }, [isActive])
	
	return (
		<div>
			<div className="container">
				{pages.map(pg => (
					<QueryNavLink
						key={pg.pageId}
						to={`/pages/${pg.pageSlug}`}
					>
						{pg.title ? pg.title : ""}
					</QueryNavLink>					
				))
				}
			</div>
			<Outlet />
		</div>
	)
}

export default Pages