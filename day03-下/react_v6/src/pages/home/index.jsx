import { Link, Outlet } from "react-router-dom";
import "./index.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import { Layout, Menu, theme, Row, Popconfirm, Avatar } from "antd";
import { getUserInfo } from "../../api/user";
import { useEffect, useState } from "react";

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    setUserInfo(await getUserInfo());
  };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user-info");
    navigate("/login");
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="home_container">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          //   items={[
          //     UserOutlined,
          //     VideoCameraOutlined,
          //     UploadOutlined,
          //     UserOutlined,
          //   ].map((icon, index) => ({
          //     key: String(index + 1),
          //     icon: React.createElement(icon),
          //     label: `nav ${index + 1}`,
          //   }))}
          items={[
            {
              key: "article",
              label: <Link to="/home/article">文章管理</Link>,
              icon: <UserOutlined />,
            },
            {
              key: "publish",
              label: <Link to="/home/publish">发布文章</Link>,
              icon: <VideoCameraOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row justify="end" align={"middle"}>
            <Avatar src={userInfo.photo}></Avatar>
            <span style={{ marginRight: 20 }}>{userInfo.name}</span>
            <span style={{ fontSize: 20, marginRight: 20 }}>
              <Popconfirm
                title="提示"
                description="确定要退出吗?"
                onConfirm={logout}
                okText="Yes"
                cancelText="No"
              >
                <PoweroffOutlined />
              </Popconfirm>
            </span>
          </Row>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
