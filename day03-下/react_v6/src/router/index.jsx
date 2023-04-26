// browser router 不带#号的
// Memory router 内存路由,多用于混合开发
import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "../pages/Login";

const router = createBrowserRouter([
  // 路由信息
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <div>主页</div> },
  { path: "/login", element: <Login /> },
]);

export default router;
