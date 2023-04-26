import "./App.css";
import { useEffect, useState } from "react";
import { getRoleList, deleteRole, editRole } from "./api/role";
import { Table, Button, Space, Popconfirm, Switch, Input, message } from "antd";
import AddRole from "./components/AddRole";

function App() {
  // 将当前的点击的数据 进行 克隆/备份/拷贝/复制 - 进入编辑状态
  // 管理编辑行的数据 [{}, {}, {id: 3}, {}, {}] 数组查找需要遍历 list.find(item => item.id === 3)
  // { 1: {}, 2: {}, 3: {}, 4: {}, 5: {} } // 对象查找更方便  editObj[3]
  const [editObj, setEditObj] = useState({});
  const editRow = (row) => {
    setEditObj({ ...editObj, [row.id]: { ...row } }); // 往里加入一条编辑的数据
  };
  // 改变函数的属性
  const changeValue = (id, propName, value) => {
    setEditObj({ ...editObj, [id]: { ...editObj[id], [propName]: value } });
  };
  console.log(editObj);
  const columns = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      render(_, record) {
        if (editObj[record.id]) {
          // 如果找到了 说明这一行进入编辑
          return (
            <Input
              value={editObj[record.id].name}
              onChange={(event) =>
                changeValue(record.id, "name", event.target.value)
              }
            ></Input>
          );
        }
        return record.name;
      },
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
      render(_, record) {
        if (editObj[record.id]) {
          // 如果找到了 说明这一行进入编辑
          return (
            <Input.TextArea
              value={editObj[record.id].description}
              onChange={(event) =>
                changeValue(record.id, "description", event.target.value)
              }
            ></Input.TextArea>
          );
        }
        return record.description;
      },
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
      render(_, record) {
        if (editObj[record.id]) {
          // 如果找到了 说明这一行进入编辑
          return (
            <Switch
              checked={editObj[record.id].state === 1}
              onChange={(checked) =>
                changeValue(record.id, "state", checked ? 1 : 2)
              }
            ></Switch>
          );
        }
        return record.state === 1 ? "启用" : "禁用";
      },
    },
    {
      title: "操作",
      dataIndex: "state",
      key: "state",
      render(_, record) {
        if (editObj[record.id]) {
          // 如果找到了 说明这一行进入编辑
          return (
            <Space>
              <Button type="link" onClick={() => saveData(record.id)}>
                保存
              </Button>
              <Button
                type="link"
                danger
                onClick={() =>
                  setEditObj({ ...editObj, [record.id]: undefined })
                }
              >
                取消
              </Button>
            </Space>
          );
        }
        return (
          <Space>
            <Button type="primary" onClick={() => editRow(record)}>
              编辑
            </Button>
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
  // 拿到id
  const saveData = async (id) => {
    // 1.拿到当前行的数据
    const currentRow = editObj[id];
    if (currentRow.name && currentRow.description) {
      await editRole(currentRow); // 调用更新接口
      // 懒更新 - 只需要把当前的缓存的数据 - 替换列表里面的数据即可
      setRoleList(
        roleList.map((item) => {
          if (item.id === id) {
            return { ...currentRow }; // 返回更新的数据
          }
          return item;
        })
      );
      setEditObj({ ...editObj, [id]: undefined }); // 关闭编辑状态
      message.success("更新成功");
    } else {
      message.error("角色名称和描述不能为空");
    }
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
