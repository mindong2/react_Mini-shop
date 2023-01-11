import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import shoesData from './data.js'; //src라서 ./
import { Route, Routes } from 'react-router-dom'
import Detail from './views/Detail';
import ItemList from'./components/ItemList';
import NavBar from './components/NavBar';

function App() {
	let [shoes] = useState(shoesData);

	return (
		
		<div className="App">

			<NavBar />

			<div className='main-bg'></div>
			<Routes>
				<Route path="/" element = {
					<div>
							<div className="container">
								<div className="row">
								{
									shoes.map((item, idx) =>{
										return(
											<ItemList shoes = {item} key = {idx} ></ItemList>
										)
									})
								}
								</div>
							</div>
					</div>
				} />
				<Route path="/detail" element= { <Detail /> }/>
			</Routes> 
		</div>
	);
}

export default App;
