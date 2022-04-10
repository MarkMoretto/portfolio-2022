
/**
 * @name Page
 * @description Abstract class
*/
export abstract class Page {

	pageId: number
	pageSlug: string
	title?: string

	constructor(pageId: number, pageSlug: string, title?: string) {
		this.pageId = pageId
		this.pageSlug = pageSlug
		this.title = title
	}

	abstract getTextFields(): string
}
