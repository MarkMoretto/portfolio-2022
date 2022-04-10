
import { Page } from "../../pages/base"

/**
 * @name AboutPage
 * @description Implementation of Page class
*/
class AboutPage extends Page {
	description: string

	constructor(pageSlug: string, pageId: number, title: string, description: string) {
		super(pageSlug, pageId, title)
		this.description = description
	}

	getTextFields(): string {
		return `${this.pageSlug.toLowerCase()} ${this.title.toLowerCase()}`
	}
}


class AboutPages {
	_pages: Array<AboutPage>
	index: number

	constructor() {
		this._pages = new Array<AboutPage>()
		this.index = 0
	}

	addPage(page: AboutPage) {
		// this._pages.push(page)
		this._pages[this.index] = page
		this.index++
	}

	/**
	 * @function getPages
	 * @returns {Array<AboutPage>}
	*/
	getPages = (): Array<AboutPage> => {
		return this._pages
	}

	/**
	 * @function findPageById
	 * @param {id} number
	 * @returns {AboutPage}
	*/	
	findPageById = (id: number) => {
		let tmpId = Number(id)
		if (Number.isFinite(tmpId)) {
			return this._pages.find(pg => pg.pageId = tmpId)
		}
	}

	/**
	 * @function findPageByTitle
	 * @param {searchString} string
	 * @returns {AboutPage}
	*/	
	findPageByTitle = (searchString: string) => {
		return this._pages.find(pg => pg.title = searchString)
	}
	
	/**
	 * @function filterPagesByKeyword
	 * @param {keyword} string
	 * @returns {Array<AboutPage>}
	*/	
	filterPagesByKeyword = (keyword: string): Array<AboutPage> => {
		return this._pages.filter(pg => {
			let allText = pg.getTextFields()
			return allText.indexOf(keyword.toLowerCase()) !== -1
		})
	}
	
	/**
	 * @function deletePageById
	 * @param {id} number
	 * @returns {void}
	*/
	deletePageById = (id: number): void => {
		this._pages = this._pages.filter(pgs => pgs.pageId !== id)
	}	
}


let aboutPages: AboutPages = new AboutPages()

aboutPages.addPage(
    new AboutPage(
        "project",
		0,
        "About the Project",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	)	
)
aboutPages.addPage(
	new AboutPage(
		"author",
		1,
		"About the Author",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	)	
)



// let aboutPages: Array<AboutPage> = [
//     new AboutPage(
//         "project",
// 		0,
//         "About the Project",
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	),
// 	new AboutPage(
// 		"author",
// 		1,
// 		"About the Author",
// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
// 	)
// ]

// /**
//  * @function getPages
//  * @returns {Array<AboutPage>}
// */
// export const getPages = (): Array<AboutPage> => {
// 	return aboutPages
// }

// /**
//  * @function findPageById
//  * @param {id} number
//  * @returns {AboutPage}
// */
// export const findPageById = (id: number) => {
// 	let tmpId = Number(id)
// 	if (Number.isFinite(tmpId)) {
// 		return aboutPages.find(pg => pg.pageId = tmpId)
// 	}
// }

// /**
//  * @function findPageByTitle
//  * @param {searchString} string
//  * @returns {AboutPage}
// */
// export const findPageByTitle = (searchString: string) => {
// 	return aboutPages.find(pg => pg.title = searchString)
// }

// /**
//  * @function filterPagesByKeyword
//  * @param {keyword} string
//  * @returns {Array<AboutPage>}
// */
// export const filterPagesByKeyword = (keyword: string): Array<AboutPage> => {
// 	return aboutPages.filter(pg => {
// 		let allText = pg.description.toLowerCase() + pg.title.toLowerCase()
// 		return allText.indexOf(keyword.toLowerCase()) !== -1
// 	})
// }

// /**
//  * @function deletePageById
//  * @param {id} number
//  * @returns {void}
// */
// export const deletePageById = (id: number): void => {
// 	aboutPages = aboutPages.filter(pgs => pgs.pageId !== id)
// }


