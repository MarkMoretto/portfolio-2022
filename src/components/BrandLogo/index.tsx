

interface RectangleElementComponent {
	bgId: string
	bgColor: string
}

/**
 * Rectangle component for logo.
 */
 const SquareBackground = ({ bgId, bgColor }: RectangleElementComponent) => {
    return (
        <rect 
            id={bgId}
            width="100%"
            height="100%"
			fill={bgColor}
        />
    )
}



interface BrandLogoProps {
	logoWidth: number
	logoHeight: number
	scaleRatio: number
	translateCoords?: {
		X: number
		y: number
	}
}

/**
 * BrandLogo component
 * @param {number} logoWidth - Width of viewBox
 * @param {number} logoHeight - Height of viewBox
 * @param {number} scaleRatio - Size of logo vs. viewBox
 * @param {Map} translateCoords - Map of X and y coords for moving the logo across and
 * 									down a display area.
 */
const BrandLogo = ({ logoWidth = 300, logoHeight = 300, scaleRatio = 0.4, translateCoords = {X: 15,y: 5} }: BrandLogoProps) => {
    return (
        <svg version="1.1" 
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
            width={logoWidth}
            height={logoHeight}
            viewBox={`0 0 ${logoWidth} ${logoHeight}`}
		>
            <g transform={`translate(${translateCoords.X}, ${translateCoords.y}) scale(${scaleRatio})`}>
                <defs>                 
                    <polyline 
                        id = "logo-lhs"
                        fill="black"
                        points="155,245
                                112,125
                                90,240
                                70,240
                                102,60
                                112,60
                                155,190"
                    />
                </defs>

				// Leveraging LogoBackground component from above.
                <SquareBackground
					bgId="logo-container"
					bgColor="#ffcf41"
				/> 
				
				// Here we called our polyline definition, which is only half of the M,
				// then `flipped` that half vertically using translate and scale to
				// achieve the full M portion of the logo.
				// Note: The x-value in translate is double the maximum x-value from the
				// points collection in our polyline object.
                <use xlinkHref="#logo-lhs" />
                <use xlinkHref="#logo-lhs" transform="translate(310,0) scale(-1, 1)" />
            </g>
        </svg>
    )
}

export default BrandLogo