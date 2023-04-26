import { useState } from "react";
import { sendCode } from "../api/user";
export const useSendCode = (num = 60) => {
  const [count, setCount] = useState(num);
  //   发送验证码
  const sendMessage = async (mobile) => {
    await sendCode(mobile);
    setCount(count - 1);
    const timer = setInterval(() => {
      setCount((preState) => {
        if (preState < 1) {
          clearInterval(timer);
          return num;
        }
        return preState - 1;
      });
    }, 1000);
  };
  return { count, sendMessage, num };
};
