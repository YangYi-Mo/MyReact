import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router/index.jsx";
import { Router, RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
