
import { NavLink } from "react-router-dom"

import BrandLogo from "../BrandLogo"
import links from "./nav-links"

import styles from "./Navbar.module.css"

const Navbar = () => {

	// let activeStyle = { textDecoration: "underline" }

	let activeClassName = "activeLink"

    return (
        <nav className={styles.navBar}>
			<BrandLogo />
			<ul>
				{links.map(link => {
					return (
					<li key={link.id}>
						<NavLink to={link.path} className={({ isActive }) => isActive ? activeClassName : undefined }>
							{link.text}
						</NavLink>
					</li>
					)
				})}
			</ul>
        </nav>
    )
}

export default Navbar