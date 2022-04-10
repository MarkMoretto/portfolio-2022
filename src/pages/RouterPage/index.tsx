import { useParams } from "react-router-dom"

import dataPages from "../About/about-data"

const RouterPage = () => {
	const { thisPageSlug } = useParams()
	const pageContent = dataPages.find(q => q.pageSlug === thisPageSlug )
	const { title, description } = pageContent
	return (
		<div>
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	)
}

export default RouterPage
