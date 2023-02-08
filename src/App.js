import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import shoesData from './data.js'; //src라서 ./
import ItemList from'./components/ItemList';
import NavBar from './components/NavBar';
import Watch from './components/Watch';

const Detail = lazy(() => import('./views/Detail.js'));
const About = lazy(() => import('./views/About.js'));
const Event = lazy(() => import('./views/Event.js'));
const Cart = lazy(() => import('./views/Cart.js'));

// export let Context1 = createContext();

function App() {
	let [shoes,setShoes] = useState(shoesData);
	let [btnClicked, setBtnClicked] = useState(1);
	
	// let navigation = useNavigate();
	useEffect(() => {
		setShoes(shoesData);
		setBtnClicked(1);
	},[]);

	useEffect(() => {
	}, []);

	let result = useQuery('userdata', () => 
		// react-query는 error가 날 경우 재요청
		axios.get('https://codingapple1.github.io/userdata.json')
		.then((a) => {
			console.log('요청')
			return a.data;
		}),
		{ staleTime : 2000 } // 2초 동안은 refetch가 되지 않음
	)
	
	// result.data -> 받아온 query의 data
	// result.isLoading -> 받아오는중일때 true 반환
	// result.error -> 에러

	return (
		
		<div className="App">

			<NavBar username = { result }></NavBar>

			<Watch />
			{/* <button onClick={() => navigation(-1)}>뒤로가기</button> */}

			{/* lazy로 import해올때 약간의 지연이 생기므로 Suspense라는것을 감싸고 fallback은 지연될 동안 보여줄 태그 */}
			<Suspense fallback = {<div>로딩중입니다.</div>}>
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
			</Suspense>
		</div>
	);
}

export default App;
