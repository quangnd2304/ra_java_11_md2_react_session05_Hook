import React from "react";
import { useState } from "react";
import { useEffect } from "react";
function ExUseState_UseEffect() {
    // Khai báo state chứa giá trị current value
    const [count, setCount] = useState(0);
    const [list, setList] = useState([1, 5, 7, 9]);
    const handleRandom = () => {
        setList([...list, parseInt(Math.random() * 10)]);
    }
    const [state, setState] = useState({ count: 0, list: [1, 5, 7, 9] });
    const handleUp = () => {
        setState({
            count: state.count + 1,
            list: state.list
        });
    }
    // C1: useEffect(callback): gọi khi render hoặc re-render
    useEffect(() => {
        // Xử lý logic khi useEffect được gọi
        console.log("useEffect(callback) được gọi khi render hoặc re-render");
    })
    // C2: useEffect(callback,[]): gọi khi render
    useEffect(() => {
        // Xử lý logic khi useEffect được gọi
        console.log("useEffect(callback,[]) được gọi khi render");
    }, []);
    // C3: useEffect(callback,[deps]): gọi khi render hoặc deps thay đổi
    useEffect(() => {
        // Xử lý logic khi useEffect được gọi
        console.log("useEffect(callback,[deps]) được gọi khi render hoặc deps thay đổi");
    }, [count, list])
    return (
        <div>
            <h2>React Hook - UseState, use Effect</h2>
            <p>Current Value: {count}</p>
            <button onClick={() => setCount(count + 1)}>UP</button>
            <button onClick={() => setCount(count - 1)}>DOWN</button>
            <p>Array: {list.toString()}</p>
            <button onClick={handleRandom}>Random</button>
            <h2>React Hook - UseState - state is object</h2>
            <p>Current Value: {state.count}</p>
            <button onClick={handleUp}>UP</button>
            <button onClick={() => setState({ count: state.count - 1, list: list })}>DOWN</button>
            <p>Array: {state.list.toString()}</p>
            <button onClick={handleRandom}>Random</button>
        </div>
    );
}
export default ExUseState_UseEffect;