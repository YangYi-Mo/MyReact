// 导包 创建根对象的包

import { createRoot } from "react-dom/client";
// 导入react包
import React from "react";

// 创建根对象

const root = createRoot(document.getElementById("root"));

// 渲染元素

const ele = React.createElement("h2", { className: "react-h2" }, "hello H2");

// root.render(<h1>
//     Hello 我是大神
// </h1>)
// jsx

{
  /* <div><h2>我是嵌套的jsx</h2></div> */
}

// const ele1 = React.createElement("div", null, React.createElement("h2"), null, "我是嵌套的")

const ele1 = (
  <>
    <div>
      <h2>我是嵌套的jsx</h2>
    </div>
    <div></div>
  </>
);

const ele2 = (
  <React.Fragment>
    <div>
      <h2>我是嵌套的jsx</h2>
    </div>
    <div></div>
  </React.Fragment>
);

// 标签必须闭合

const ele3 = <input></input>;

// 驼峰命名法

const ele4 = <div className="" style={{ fontSize: 12 }}></div>;

const ele5 = (
  <ul className="ulist focuslistnews">
    <li className="bold-item">
      <span className="dot"></span>
      <a
        href="http://m.ce.cn/bwzg/202304/18/t20230418_38503227.shtml"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=1"
        target="_blank"
        rel="noreferrer"
      >
        着眼长远提振外贸预期
      </a>
    </li>
    <li>
      <a
        href="https://ckxxapp.ckxx.net/pages/2023/04/17/1787f2c0e64543fb8c20205e0b63ed6a.html?shareAppId=2b0cbbb1d563414393513f147f7e9799&amp;praise=1"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=2"
        target="_blank"
        rel="noreferrer"
      >
        专家认为：中巴将携手开启全球治理新时代{" "}
      </a>
    </li>
    <li>
      <a
        href="http://www.china.com.cn/opinion2020/2023-04/18/content_85234859.shtml"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=3"
        target="_blank"
        rel="noreferrer"
      >
        美国枪支问题积重难返，背后利益集团难辞其咎
      </a>
    </li>
    <li>
      <a
        href="http://news.haiwainet.cn/n/2023/0417/c3541093-32592234.html"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=4"
        target="_blank"
        rel="noreferrer"
      >
        马斯克称美国政府掌握推特用户私聊信息：这让我大吃一惊
      </a>
    </li>
    <li>
      <a
        href="https://item.btime.com/f1oqip9npkr8f28f8hn8pgtpd52"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=5"
        target="_blank"
        rel="noreferrer"
      >
        专题｜新时代首都发展巡礼
      </a>
      &nbsp;
      <a
        href="https://news.cctv.com/special/2023gjaqjyr/index.shtml?spm=C94212.P37382410946.S60688.1"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=5"
        target="_blank"
        rel="noreferrer"
      >
        全民国家安全教育日
      </a>
    </li>
    <li>
      <a
        href="https://www.piyao.org.cn/"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=6"
        target="_blank"
        rel="noreferrer"
      >
        互联网联合辟谣平台
      </a>
      &nbsp;
      <a
        href="https://www.piyao.org.cn/bq/index.htm"
        mon="ct=1&amp;a=2&amp;c=top&amp;pn=6"
        target="_blank"
        rel="noreferrer"
      >
        网络辟谣标签工作专区
      </a>
    </li>
  </ul>
);
const name = "我是老高";
const ele6 = <span>{name.split("").reverse()}</span>;
const reverseName = () => name.split("").reverse().join("");
const ele7 = <span>{reverseName()}</span>;

const ele8 = <span>{name + "123"}</span>;
const ele9 = <span>{`${name}123`}</span>;
const ele10 = (
  <span>
    {name}
    {123}
  </span>
);
const isMarry = true;
const studentName = "";
const teacherName = "";
const ele11 = <span>{name + (isMarry ? "已婚" : "未婚")}</span>;
const ele12 = <span>{studentName || "未知学生"}</span>;
const ele13 = <span>{studentName && studentName}</span>;
const ele14 = <span>{teacherName ?? "未知老师"}</span>;

const arr = [
  { id: 1, name: "推荐" },
  { id: 2, name: "一人套餐" },
  { id: 3, name: "西贝凉菜" },
  { id: 4, name: "西贝热菜" },
  { id: 5, name: "杂粮主食" },
];
const ele15 = (
  <ul>
    {arr.map((item) => {
      return <li key={item.id}>{item.name}</li>;
    })}
  </ul>
);
const createLi = () => {
  const newArr = [];
  arr.forEach((item) => {
    newArr.push(<li key={item.id}>{item.name}</li>);
  });
  // 返回一个li的jsx的数组
  return newArr;
};
const ele16 = <ul>{createLi()}</ul>;
const getMoneny = () => {
  alert(~~((Math.random() + 1) * 10 - 3) + "k");
};
const ele17 = <button onClick={getMoneny}>拿多少钱的offer</button>;

const ele18 = (
  <button onMouseOver={(event) => console.log(event.pageX)}>测试</button>
);
const ele19 = <button onMouseOver={(event) => {}}>测试</button>;

const App = () => {
  return <h1>我是APP组件</h1>;
};
const Header = () => {
  return <h1>我是Header组件</h1>;
};
const Footer = () => {
  return <h1>我是Footer组件</h1>;
};
const Content = () => {
  return <h1>我是Content组件</h1>;
};
root.render(
  <>
    <App />
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </>
);
