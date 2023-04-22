import {useState} from 'react';
export const SendCode = ()=>{
    const [count, setCount] = useState(60);
    const sendMessage =async ()=>{
        await new Promise((resolve)=> setTimeout(()=>resolve(),1000))
        setCount(count-1)
        const timer = setInterval(()=>{
            setCount((perState)=>{
                if(perState<1){
                    clearInterval(timer)
                    return 60
                }
                return perState-1
            })
        },1000)
    }
    return { count, sendMessage}
}