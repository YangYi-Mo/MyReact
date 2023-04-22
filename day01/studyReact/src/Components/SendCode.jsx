import useSendCode from './sendcode-hook'

const SendCode = () => {
    const { count, sendMessage } = useSendCode();
    return (
        <button onClick={sendMessage} disabled={count<60}>{count<60? `还剩${count}秒`: '发送验证'}</button>
    )
}