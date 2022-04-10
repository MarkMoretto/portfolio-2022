
import { NavLink } from "react-router-dom"

import BrandLogo from "../BrandLogo"
import navbarLinks from "./nav-links"

import "./Navbar.module.css"

const Navbar = () => {

	// let activeStyle = { textDecoration: "underline" }

	let activeClassName = "activeLink"

    return (
        <nav className="navBar">
			<BrandLogo />
			<ul>
				{navbarLinks.map(item => {
					return (
					<li key={item.id}>
						<NavLink to={item.path} className={({ isActive }) => isActive ? activeClassName : undefined }>
							{item.text}
						</NavLink>
					</li>
					)
				})}
			</ul>
        </nav>
    )
}

export default Navbar