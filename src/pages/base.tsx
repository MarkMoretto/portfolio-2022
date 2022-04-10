
/**
 * @name Page
 * @description Abstract class
*/
export abstract class Page {

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

