import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Chats from '../Components/Chats';
import MyAccountPage from '../Components/MyAccountPage';
import Home from '../Components/Home';
import Login from '../Components/login';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/chats"><Chats /></Route>
				<Route exact path="/myaccountpage"><MyAccountPage /></Route>
				<Route exact path="/home"><Home /></Route>
				<Route exact path="/login"><Login /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;