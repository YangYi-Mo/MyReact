import "./App.css";
import { useEffect, useState } from "react";
import { getRoleList } from "./api/role";
import { Table, Button, Space, Popconfirm } from "antd";
import AddRole from "./components/AddRole";

function App() {
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
      render(_, record) {
        return record.state === 1 ? "启用" : "禁用";
      },
    },
    {
      title: "操作",
      dataIndex: "state",
      key: "state",
      render(_, record) {
        return (
          <Space>
            <Button type="primary">编辑</Button>
            <Popconfirm
              onConfirm={() => onDelete(record.id)}
              description="是否要删除该条记录"
            >
              <Button danger>删除</Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];
  useEffect(() => {
    getRoleAPI();
  }, []);
  const [roleList, setRoleList] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const onDelete = async (id) => {
    await deleteRole(id); // 调用删除接口
    getRoleAPI(); // 重新拉取数据
  };
  const getRoleAPI = async () => {
    const result = await getRoleList();
    setRoleList(result);
  };
  const onAddSuccess = () => {
    setShowDialog(false); // 关闭弹层
    getRoleAPI(); // 重新获取数据
  };
  return (
    <div className="App">
      <Button type="primary" onClick={() => setShowDialog(true)}>
        新增角色
      </Button>
      <Table
        pagination={false}
        rowKey="id"
        dataSource={roleList}
        columns={columns}
      ></Table>
      <AddRole
        showDialog={showDialog}
        onAddSuccess={onAddSuccess}
        onCancel={() => setShowDialog(false)}
      />
    </div>
  );
}

export default App;
