import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes'; // Import routes
import MainLayout from './layouts/layout';

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
      </Routes>
    </Router>
  );
};

export default App;
