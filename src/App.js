import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, createContext } from 'react';
import shoesData from './data.js'; //src라서 ./
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom'
import ItemList from'./components/ItemList';
import NavBar from './components/NavBar';
import Detail from './views/Detail';
import About from './views/About';
import Event from './views/Event';
import Cart from './views/Cart';
import axios from 'axios';

// export let Context1 = createContext();

function App() {
	let [shoes,setShoes] = useState(shoesData);
	let [listItem,setItem] = useState([10,11,12]);
	let [btnClicked, setBtnClicked] = useState(1);
	// let navigation = useNavigate();
	useEffect(() => {
		setShoes(shoesData);
		setBtnClicked(1);
	},[])
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
						<button onClick={() =>{
							if(btnClicked === 1){
								axios.get('https://codingapple1.github.io/shop/data2.json')
								.then((res) => {
									let resData = [...shoes , ...res.data];
									setShoes(resData);
									setBtnClicked(btnClicked + 1);
								})
								.catch((err) => console.log(err));
							}else if(btnClicked === 2){
								axios.get('https://codingapple1.github.io/shop/data3.json')
								.then((res) => {
									let resData = [...shoes , ...res.data];
									setShoes(resData);
									setBtnClicked(btnClicked + 1);
								})
								.catch((err) => console.log(err));
							}else{
								alert('더이상 상품이 없습니다!')
							}
						}}>더보기</button>
					</div>
				} />

				{/* detail */}
				<Route path="/detail/:id" element= {
					// <Context1.Provider value= {{ listItem }}>
					// 	<Detail shoes={shoes}/>
					// </Context1.Provider>
					<Detail shoes={shoes}/>

				}/>
				
				<Route path='/cart' element={ <Cart />}></Route>

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
