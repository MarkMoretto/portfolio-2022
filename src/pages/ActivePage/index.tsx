import { Fragment } from "react"
import { useParams } from "react-router-dom"

import { findPageByTitle } from "../../classes/about"

const ActivePage = () => {
	let params = useParams()
	let currentPage = findPageByTitle(params.pageSlug)
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
				<p>Page not found.</p>
			}
		</Fragment>
	)
}

export default ActivePage