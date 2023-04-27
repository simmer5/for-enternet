import React from 'react'

export const Logo = ({ width, height }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			// width='246'
			// height='64'
			width={width}
			height={height}
			fill='none'
			viewBox='0 0 246 64'
		>
			<path fill='url(#pattern0)' d='M0 0H246V64H0z'></path>
			<mask
				id='mask0_0_25'
				style={{ maskType: 'alpha' }}
				width='246'
				height='64'
				x='0'
				y='0'
				maskUnits='userSpaceOnUse'
			>
				<path fill='url(#pattern1)' d='M0 0H246V64H0z'></path>
			</mask>
			<g mask='url(#mask0_0_25)'>
				<path fill='#000' fillOpacity='0.01' d='M0 0H246V64H0z'></path>
			</g>
			<defs>
				<pattern
					id='pattern0'
					width='1'
					height='1'
					patternContentUnits='objectBoundingBox'
				>
					<use transform='scale(.00407 .01563)' xlinkHref='#image0_0_25'></use>
				</pattern>
				<pattern
					id='pattern1'
					width='1'
					height='1'
					patternContentUnits='objectBoundingBox'
				>
					<use transform='scale(.00407 .01563)' xlinkHref='#image0_0_25'></use>
				</pattern>
				<image
					id='image0_0_25'
					width='246'
					height='64'
					xlinkHref='data:image/png;base64,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'
				></image>
			</defs>
		</svg>
	)
}
