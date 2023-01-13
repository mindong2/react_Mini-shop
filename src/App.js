import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import shoesData from './data.js'; //src라서 ./
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import ItemList from'./components/ItemList';
import NavBar from './components/NavBar';
import Detail from './views/Detail';
import About from './views/About';
import Event from './views/Event';

function App() {
	let [shoes] = useState(shoesData);
	// let navigation = useNavigate();
	return (
		
		<div className="App">

			<NavBar />

			{/* <button onClick={() => navigation(-1)}>뒤로가기</button> */}

			<Routes>
				
				{/* main */}
				<Route path="/" element = {
					<div>
						<div className='main-bg'></div>
						<div className="container">
							<div className="row">
							{
								shoes.map((item, idx) =>{
									return(
										<ItemList shoes = {item} key = {idx}></ItemList>
									)
								})
							}
							</div>
						</div>
					</div>
				} />

				{/* detail */}
				<Route path="/detail/:id" element= { <Detail shoes={shoes}/> }/>
				
				{/* about */}
				<Route path="/about" element= { <About /> }>
					<Route path='member' element ={<div>멤버소개</div>}/>
					<Route path='location' element ={<div>회사위치</div>}/>
				</Route>

				{/* event */}
				<Route path="/event" element={<Event />}>
					<Route path="/event/one" element={<h2>양배추즙 서비스</h2>}/>
					<Route path="/event/two" element={<h2>생일쿠폰 받기</h2>}/>
				</Route>
				
				{/* 404page */}
				<Route path="*" element= { <h1>404 알수없는 페이지입니다</h1> }/>
			</Routes> 
		</div>
	);
}

export default App;
