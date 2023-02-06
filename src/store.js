import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice'
/*
    Redux에서 state 변경 step
    1. state변경해주는 함수 만들기
    2. 해당 함수 export 시키기
    3. 사용하려는 컴포넌트에서 import 후 
    예) 
    let dispatch = useDispatch();
    dispatch(함수()) 
*/

// useState 역할

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
      increaseAge(state, action){
        const newState = state.find(v => v.id === action.payload)
        newState.count += 1;
      },
      addItem(state, action) {
        if(state.find(v => v.id === action.payload.id) !== undefined){
          alert('이미 장바구니에 있는 상품입니다.');
        }else{
          alert('장바구니에 추가되었습니다!')
          state.push({
            id : action.payload.id,
            name : action.payload.title,
            count: 1
          })
        }
      }
    }

})

export let { increaseAge, addItem } = cart.actions;

export default configureStore({
  reducer: {
    // 상위에서 선언한 slice 작명 + 뒤에 reducer
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 