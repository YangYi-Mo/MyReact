import { Modal, Form, Input, Switch, Button, Space, message } from "antd";
import { addRole } from "../api/role";
const AddRole = ({ showDialog, onAddSuccess, onCancel }) => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    await addRole({ ...values, state: values.state ? 1 : 2 });
    // 新增员工成功
    message.success("新增角色成功");
    form.resetFields(); // 清空表单
    onAddSuccess && onAddSuccess();
  };
  const cancelBtn = () => {
    form.resetFields(); // 清空表单
    onCancel();
  };
  return (
    <Modal title="新增角色" open={showDialog} footer={null} onCancel={onCancel}>
      {/* 放置表单 */}
      <Form form={form} style={{ marginTop: 40 }} onFinish={onFinish}>
        <Form.Item
          label="角色名称"
          name="name"
          rules={[
            {
              required: true,
              message: "角色名称不能为空",
            },
          ]}
        >
          <Input placeholder="请输入角色名称"></Input>
        </Form.Item>
        <Form.Item
          name="description"
          label="角色描述"
          rules={[
            {
              required: true,
              message: "角色描述不能为空",
            },
          ]}
        >
          <Input.TextArea placeholder="请输入角色描述"></Input.TextArea>
        </Form.Item>
        {/* Form.Item 会默认的读取子组件的value值  */}
        <Form.Item name="state" label="角色状态" valuePropName="checked">
          <Switch></Switch>
        </Form.Item>
        <Form.Item name="state" wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button onClick={cancelBtn}>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default AddRole;
