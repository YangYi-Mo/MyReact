import {useState, useEffect} from 'react';

 useEffect = (()=>{
    const [count, setCount]  = useState(0)
    return <div>
          <h2>{count}</h2>
        <button onClick={()=>{count+1}}>+1</button>
    </div>
}, [])

export default useEffect;