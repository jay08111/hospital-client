import { Outlet, Navigate } from "react-router-dom";

const Root = () => {
  //   const token = localStorage.getItem("token");
  const token = false;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Root;
