import React from 'react'
import styled from 'styled-components'
import Lady from '../img/lady.jpg'


const div = styled.div'
	height: 
	background-color: grey
'

const Title = styled.h1'
	width: 65%

'

const Left = styled.div'

'

const Right = styled.div'
	width: 40%
'

const Pitch = styled.p'
	width: 60%
	margin-top: 17px
	font-size 19px

'

const Button = styled.button'
	padding: 13px
	background-color: green
	color: white
	cursor: pointer
'

const Image = styled.img'
	width: 100%
'

const First = () => {
	return (
		<div>
			<Left>
				<Title> This is limited Christmas page for December </Title>
				<Pitch> Some funny sales pitch... </Pitch>
				<Button> Get Scammed Now! </Button>
			</Left>
			<Right> <Image src={Lady} /> </Right>
		</div>
	)
}

export default First
