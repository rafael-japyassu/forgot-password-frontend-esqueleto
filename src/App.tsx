import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import User from './pages/User';
import Home from './pages/Home';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			{
				localStorage.getItem("app_id") ?
				<div>
					<Redirect to="/inicio" />
					<Home />
				</div> :
				<div>
					<Redirect to="/login" />
					<User />
				</div>
					
			}
			
		</BrowserRouter>
	);
}

export default App;