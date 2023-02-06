import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, removeItem } from '../store';
const Cart = () => {
    
    // Redux store 가져와주는 hook
    let user = useSelector((state) => state.user);
    let cart = useSelector((state)=> state.cart);
    // store.js에 요청을 보내주는 함수 
    let dispatch = useDispatch();
    console.log(cart)
    return(
        <div>
            <h6>{user.name}의 장바구니</h6>
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