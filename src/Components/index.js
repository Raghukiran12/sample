import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/Chats'><div>Chats</div></Link>
		<Link to='/MyAccountPage'><div>MyAccountPage</div></Link>
		<Link to='/Home'><div>Home</div></Link>
		<Link to='/login'><div>login</div></Link>
	</div>
	)
}