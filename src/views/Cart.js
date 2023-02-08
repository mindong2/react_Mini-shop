import { memo, useState } from 'react';
import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, removeItem } from '../store';

/* 원래는 state가 변경되면 화면 전체가 재렌더링 되지만 memo를 사용하면
해당 컴포넌트의 props가 바뀔때만 렌더링 (props가 길면 손해) */
const Child = memo(() => {
    console.log('렌더링');
    return(
        <div>자식</div>
    )
})

const Cart = () => {
    // useMemo와 useEffect는 비슷한 기능을 하지만 useMemo는 렌더링시작할때 호출 useEffect는 렌더링 후 호출
    // let result = useMemo(() => {
    //     return 성능저하 기능 함수 
    // }, [])
    // Redux store 가져와주는 hook
    let user = useSelector((state) => state.user);
    let cart = useSelector((state)=> state.cart);
    // store.js에 요청을 보내주는 함수 
    let dispatch = useDispatch();
    let [count, setCount] = useState(0)
    return(
        <div>
            <Child></Child>
            <h6 onClick={() => {
                setCount(count + 1);
            }}>{user.name}의 장바구니</h6>
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>수량변경</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, idx) =>{
                            return(
                                <tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.count}</td>
                                    <td><button className='btn btn-sm btn-primary' onClick={()=>{
                                        dispatch(increaseCount(item.id))
                                    }}>+</button></td>
                                    <td><button className='btn btn-sm btn-danger' onClick={()=>{
                                        dispatch(removeItem(item.id))
                                    }}>X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
</Table> 
        </div>
    )
}

export default Cart;