import { Navigate } from "react-router-dom";
import LayoutDefault from "../Layout/LayoutDefault";
import PrivateRoutes from "../components/privateRoute";
import Answers from "../pages/Answers";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Quiz from "../pages/Quiz";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topic from "../pages/Topic";

export const router = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "topic",
        element: <Topic />
      },
      {
        path: "quiz",
        element: <Quiz />
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "answers",
            element: <Answers />
          },
          {
            path: "result",
            element: <Result />
          }
        ]
      },
      {
        path: "*",
        element: <Navigate to="/" replace />
      }
    ]
  }
];
