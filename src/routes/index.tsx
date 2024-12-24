import DashboardPage from '../pages/dashboard';
import ClassesPage from '../pages/classes';
import { Dashboard, ClassOutlined, School } from '@mui/icons-material';
import StudentPage from '../pages/students';

export const routes = [
  { label: 'Dashboard', path: '/', element: <DashboardPage />, backgroundColor: '#EBF7FB', icon: <Dashboard /> },  
  { label: 'Classes', path: '/classes', element: <ClassesPage />, icon: <ClassOutlined /> },  
  { label: 'Students', path: '/students', element: <StudentPage />, icon: <School /> },
];


