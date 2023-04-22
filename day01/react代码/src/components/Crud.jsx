import { useState } from "react";
import "./Crud.css";
const Crud = () => {
  const [list, setList] = useState([
    { id: 1, name: "张宝宝" },
    { id: 2, name: "刘泡泡" },
    {
      id: 3,
      name: "王小明",
    },
  ]);
  const [visible, setVisible] = useState(false); // 控制弹层的显示或者隐藏

  const [username, setUserName] = useState(""); // 用来管理用户名
  const [userId, setUserId] = useState(null); // 用来记录用户的id
  const delUser = (id) => {
    // 删除用户
    setList(list.filter((item) => item.id !== id));
  };
  const addUser = () => {
    // 添加用户或者编辑用户
    if (username) {
      if (userId) {
        // 编辑
        setList(
          list.map((item) => {
            if (item.id === userId) {
              return { ...item, name: username };
            }
            return item;
          })
        );
      } else {
        // 新增
        setList([
          ...list,
          { name: username, id: Math.max(...list.map((item) => item.id)) + 1 },
        ]);
      }

      setVisible(false); // 关闭弹层
      setUserName(""); // 清除数据
      setUserId(null); // 清除记录的id
    }
  };
  const editUser = (id) => {
    setVisible(true); // 显示弹层
    setUserName(list.find((item) => item.id === id)?.name);
    setUserId(id);
  };
  return (
    <>
      <button onClick={() => setVisible(true)}>添加人员</button>
      <table border={2}>
        <thead>
          <th width="100" align="center">
            ID
          </th>
          <th width="100" align="center">
            姓名
          </th>
          <th width="100" align="center">
            操作
          </th>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => editUser(item.id)}>编辑</button>
                <button onClick={() => delUser(item.id)}>删除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 定义弹层 */}
      {visible && (
        <div className="dialog">
          <div class="form">
            <div class="title">
              <span onClick={() => setVisible(false)}>X</span>
            </div>
            <div className="form-info">
              <input
                placeholder="请输入用户名"
                className="username"
                type="text"
                value={username}
                onInput={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="footer">
              <button onClick={addUser}>确定</button>
              <button onClick={() => setVisible(false)}>取消</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Crud;
