import { createContext, useState, useContext } from "react";
import "./App.css";
const CounterContext = createContext();

function Counter() {
  // 通过 useContext() 获取依赖
  const count = useContext(CounterContext);
  return (
    <div>
      <h1>Counter-组件</h1>
      <h2>{count}</h2>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* 通过CounterContext.Provider 实现依赖声明，类比 Vue3 的 provide() */}
      <CounterContext.Provider value={count}>
        <Counter />
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </CounterContext.Provider>
    </div>
  );
}
