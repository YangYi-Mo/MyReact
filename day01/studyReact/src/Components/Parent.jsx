import {useState} from 'react';
import Child from './Child';

const Parent =()=>{
    const [count, setCount] = useState(0);
    return <div>
        <h2>Parent</h2>
        <h2>{count}</h2>
        <Child count={count} setCount = { setCount}/>
    </div>
}

export default Parent;
