import { Fragment } from "react"
import { useParams } from "react-router-dom"

import { findPageByTitle } from "../../classes/about"


const ActivePage = () => {
	let params = useParams()
	// let pages = getPages()
	// let currentPage = pages.findPageByTitle(params.pageSlug)
	let currentPage = findPageByTitle(params.pageSlug)
	// const { url, path } = useMatch()
	return (
		<Fragment>
				{currentPage ? 
				<main>
				<h2>{currentPage.title}</h2>
				<p>
					{currentPage.description}
				</p>
				</main>
				: 
				<p>Page not found.</p>}
		</Fragment>
	)
}

export default ActivePage