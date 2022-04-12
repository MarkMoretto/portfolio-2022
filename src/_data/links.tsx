import NavLinkC from "../classes/link"

/**
 * @description Module for various link data  used within app.
*/


/**
 * Navigation links
 * @description Array of NavLink objects for use in Navbar component.
*/
export const NavLinks: Array<NavLinkC> = new Array<NavLinkC>(
	new NavLinkC(1, "/", "Home"),
	new NavLinkC(2, "/pages", "Pages"),
	new NavLinkC(3, "/about", "About"),
)

// export default NavLinks
