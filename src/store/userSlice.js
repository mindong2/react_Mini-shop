import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    // object, array는 직접수정 가능 => 문자 하나만 변경하더라도 object에 넣으면 편하다
    initialState : {name : 'kim', age : 20},
    // state 수정
    reducers : {
        changeName(state){ //state -> Kim
            state.name = 'park';
        },
        // increase(state, action){ //state 변경함수를 통상적으로 action이라고 한다
        //     // 파라미터 갖다 쓸때는 payload
        //     state.age = state.age + action.payload;
        // }
    }
})

export let { changeName } = user.actions;
export default user;