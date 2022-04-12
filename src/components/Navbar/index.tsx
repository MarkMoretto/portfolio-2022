
import { NavLink } from "react-router-dom"

import { NavLinks } from "../../_data/links"

import BrandLogo from "../BrandLogo"
import styles from "./Navbar.module.css"


const Navbar = () => {
	let activeClassName = "activeLink"
    return (
        <nav className={styles.navBar}>
			<BrandLogo />
			<ul>
				{NavLinks.map((link) => {
					return (
						<li key={link.getId()}>
						<NavLink to={link.path} className={({ isActive }) => isActive ? activeClassName : undefined }>
							{link.label}
						</NavLink>
					</li>						
					)
				})}
			</ul>
        </nav>
    )
}

export default Navbar