import { lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

const Login = lazy(() => import("@/pages/Login/LoginPage"));

const Home = () => <h2>Home Page</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const NotFound = () => <h2>404 - Not Found</h2>;

const AuthRoute = ({ isAuthenticated = false }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};

const ProtectedRoute = ({ isAuthenticated = false }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<></>}>
//       <Route
//         path="/login"
//         element={
//           <AuthRoute isAuthenticated={true}>
//             <Login />
//           </AuthRoute>
//         }
//       />

//       <Route element={<ProtectedRoute isAuthenticated={true} />}>
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Route>
//   )
// );

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: (
//       <AuthRoute isAuthenticated={true}>
//         <Login />
//       </AuthRoute>
//     ),
//   },
//   {
//     element: (
//       <ProtectedRoute
//         isAuthenticated={true}
//         children={
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         }
//       />
//     ),
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthRoute isAuthenticated={false}>
            <Login />
          </AuthRoute>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Router;
