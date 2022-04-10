
/**
 * @name Page
 * @description Abstract class
*/
abstract class Page {

	pageSlug: string
	pageId: number
	title: string

	constructor(pageSlug: string, pageId: number, title: string) {
		this.pageSlug = pageSlug
		this.pageId = pageId
		this.title = title
	}

	abstract getTextFields(): string
}

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


let pages: Array<AboutPage> = [
    new AboutPage(
        "project",
		0,
        "About the Project",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	),
	new AboutPage(
		"author",
		1,
		"About the Author",
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	)
]

/**
 * @function getPages
 * @returns {Array<AboutPage>}
*/
export const getPages = (): Array<AboutPage> => {
	return pages
}

/**
 * @function findPageById
 * @param {id} number
 * @returns {AboutPage}
*/
export const findPageById = (id: number) => {
	return pages.find(pg => pg.pageId = id)
}

/**
 * @function findPageByTitle
 * @param {searchString} string
 * @returns {AboutPage}
*/
export const findPageByTitle = (searchString: string) => {
	return pages.find(pg => pg.title = searchString)
}

/**
 * @function filterPagesByKeyword
 * @param {keyword} string
 * @returns {Array<AboutPage>}
*/
export const filterPagesByKeyword = (keyword: string): Array<AboutPage> => {
	return pages.filter(pg => {
		let allText = pg.description.toLowerCase() + pg.title.toLowerCase()
		return allText.indexOf(keyword.toLowerCase()) !== -1
	})
}

/**
 * @function deletePageById
 * @param {id} number
 * @returns {void}
*/
export const deletePageById = (id: number): void => {
	pages = pages.filter(pgs => pgs.pageId !== id)
}