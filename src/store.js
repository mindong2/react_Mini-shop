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
        // 숙제중.... 
        if(state.id === action.payload){
          state.count = state.count + 1;
        }else{
          console.log(state[0])
        }
      }
    }

})

export let { increaseAge } = cart.actions;

export default configureStore({
  reducer: {
    // 상위에서 선언한 slice 작명 + 뒤에 reducer
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 