import { useState } from "react";

const Counter = () => {
    // useState只能用在 函数式组件或者是自定义hook中
    // 不能放在if else 也不能for循环 必须至于组件的顶级
    const [count, setCount] = useState(1) // 值只会在第一次渲染时生效
    // useState的原理是 闭包
    const addCount =  () => {
        setCount(count + 1) // 就会造成数据的更新- 视图就会重新渲染
    }
    return <>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <h3>{ count }</h3>
        <button onClick={addCount}>+1</button>
    </>
}

export default Counter