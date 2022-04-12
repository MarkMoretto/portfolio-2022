/**
 * Link/s class for lists, navs, etc.
*/
import { ABCLink } from "./_general"

interface ILink {
	getId(): number
	setId(n: number): void
}

/**
 * @name NavLinkC
 * @description Main navigation link class
 * @implements {ILink}
 * @extends {ABCLink}
*/
class NavLinkC extends ABCLink implements ILink {

	private _id: number
	label: string
	path: string

	constructor(linkId: number, linkLabel: string, linkPath: string) {
		super()
		this._id = linkId
		this.label = linkLabel
		this.path = linkPath
	}

	/**
	 * Retrieve id value.
	 * @returns {number} - Valud of id
	*/
	getId(): number {
		return this._id
	}

	/**
	 * Set id value.
	 * @returns {void}
	*/	
	setId(value: number): void {
		this._id = value
	}
}


export default NavLinkC