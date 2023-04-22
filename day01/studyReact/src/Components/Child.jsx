import {useState} from 'react';
import Parent from './Parent';

const Child = (propos)=>{
    const [count, setCount] = useState(0);
    return <div>
        <h1>Child</h1>
        <h2>{propos.count}</h2>
        <button onClick={()=>{propos.setCount(propos.count+1)}}>Click</button>
    </div>
}

export default Child;