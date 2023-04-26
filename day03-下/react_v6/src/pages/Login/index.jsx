import "./index.css";
import { Card, Form, Input, Button, Space, message } from "antd";
import { useSendCode } from "../../hooks/index.js";
import { login } from "../../api/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { count, sendMessage, num } = useSendCode();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    console.log(values);
    const result = await login(values);
    console.log(result);
    localStorage.setItem("user-info", JSON.stringify(result));
    message.success("登录成功");
    navigate("/home");
  };
  return (
    <div className="login-container">
      <Card className="login-card">
        <Form style={{ marginTop: 50 }} onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[{ required: true, message: "请输入手机号" }]}
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[{ required: true, message: "请输入验证码" }]}
          >
            <Space direction="horizontal">
              <Input placeholder="请输入验证码"></Input>
              <Button
                disabled={count < num}
                onClick={() => sendMessage(form.getFieldValue("mobile"))}
              >
                {count < num ? `${count}秒后重试` : "获取验证码"}{" "}
              </Button>
            </Space>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
