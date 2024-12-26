import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from "./routes"; // Import routes
import MainLayout from "./layouts/layout";
import LoginPage from "./pages/auth/login";
import AuthLayout from "./layouts/auth";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <MainLayout backgroundColor={route.backgroundColor}>
                {route.element}
              </MainLayout>
            }
          />
        ))}
        {/* // login page route with path /login custom layout */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
