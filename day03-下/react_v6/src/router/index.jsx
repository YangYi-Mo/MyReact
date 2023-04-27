// browser router 不带#号的
// Memory router 内存路由,多用于混合开发
import { createBrowserRouter, Navigate, redirect } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/home";
import Publish from "../pages/Publish";
import Article from "../pages/Article";

// 懒加载
import { lazy } from "react";
// const Publish = lazy(() => import("../pages/Publish/index.jsx"));
// const Article = lazy(() => import("../pages/Article/index.jsx"));

const router = createBrowserRouter([
  // 路由信息
  { path: "/", element: <Navigate to="/home" /> },
  {
    path: "/home",
    element: <Home />,
    loader: () => {
      // 表示路由加载之前的操作
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
      // 从本地存储中获取用户信息
      if (!userInfo.token) {
        // 如果没有token,则跳转到登录页面
        // return redirect("/login");
      }
      // 如果有token,则跳转到首页
      return null;
    },
    children: [
      {
        path: "article",
        element: <Article />,
      },
      {
        path: "publish",
        element: <Publish />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      // 表示路由加载之前的操作
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
      // 从本地存储中获取用户信息
      if (userInfo.token) {
        return redirect("/");
      }
      // 如果没有token,则跳转到登录页面
      return null;
    },
  },
]);

export default router;
