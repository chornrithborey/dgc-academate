import DashboardPage from '../pages/dashboard';
import ClassesPage from '../pages/classes';
import { Dashboard, ClassOutlined } from '@mui/icons-material';

export const routes = [
  { label: 'Home', path: '/', element: <DashboardPage />, backgroundColor: '#EBF7FB', icon: <Dashboard /> },  
  { label: 'Classes', path: '/classes', element: <ClassesPage />, icon: <ClassOutlined /> },  
];


