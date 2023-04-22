import { useState } from "react";

export default function App() {
  // 有两个input 框，分别为标题框和日期框，有一个提交按钮，将input框中的值 提交到table表单中 并清除input框中的值
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = () => {
    setList([...list, { title, date }]);
    setTitle("");
    setDate("");
  };

  // 点击编辑按钮后，能够将当前行的数据填充到input框中
  const onEdit = (index) => {
    // 点击回显数据到input中
    setTitle(list[index].title);
    setDate(list[index].date);
    setId(index);

    setList([...list]);
  };

  const onDel = (index) => {
    // 删除当前点击数据
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <input type='text' value={title} onChange={handleTitleChange} />
      <input type='date' value={date} onChange={handleDateChange} />
      <button onClick={handleSubmit}>提交</button>

      <table>
        <thead>
          <tr>
            <th>标题</th>
            <th>日期</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>
                  <button onClick={onEdit}>编辑</button>
                  <button onClick={onDel}>删除</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
