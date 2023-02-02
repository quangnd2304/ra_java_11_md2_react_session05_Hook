import React from 'react';
import { useReducer } from 'react';

// Khởi tạo giá trị khởi tạo của state(count)
let initialState = 0;
// Tạo các action dùng để gửi đến reducer
const ACT_UP = "UP";
const ACT_DOWN = "DOWN";
const ACT_UP3 = "UP3";
//Khởi tạo reducer để nhận các action --> cập nhật state(count)
// state: giá trị hiện tại của state, action: đối tượng js mà gửi đi
const reducer = (state, action) => {
    // Cập nhật state
    switch (action) {
        case ACT_UP:
            state = state + 1;
            return state;
        case ACT_DOWN:
            state = state - 1;
            return state;
        case ACT_UP3:
            state = state + 3;
            return state;
        default:
            return state;
    }
}
export default function ExUseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>React Hook - Reducer and useReducer</h2>
            <p>Current value: {count}</p>
            <button onClick={() => dispatch(ACT_UP)}>UP</button>
            <button onClick={() => dispatch(ACT_DOWN)}>DOWN</button>
            <button onClick={() => dispatch(ACT_UP3)}>UP3</button>
        </div>
    )
}
