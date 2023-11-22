import React from 'react'
import styles from 'styled-components'

const div = styleds.div'
	height: 75px;
'

const packager = styles.div'
	padding 20px 35px;
	display: flex;
	justify-content: space-between;
'

const NavBar = () => {
	return (
		<div>
			<packager>
				<span> logo </span>
				<span> about </span>
				<span> contact </span>
			</packager>
		</div>
	)
}

export default Navbar
