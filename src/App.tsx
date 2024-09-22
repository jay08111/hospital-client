import { lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

const Login = lazy(() => import("@/pages/Login/LoginPage"));

const Home = () => <h2>Home Page</h2>;
const NotFound = () => <h2>404 - Not Found</h2>;

const AuthTokenRoute = ({ isAuthenticated = false }) => {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};

const ProtectedRoute = ({ isAuthenticated = false }) => {
  if (isAuthenticated) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<AuthTokenRoute isAuthenticated={true} />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute isAuthenticated={true} />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
