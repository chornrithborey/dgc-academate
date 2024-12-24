import DashboardPage from '../pages/dashboard';
import ClassesPage from '../pages/classes';
import StudentPage from '../pages/students';
import AttendancePage from '../pages/attendance';
import ScorePage from '../pages/score';
import { Dashboard, ClassOutlined, School, BarChart } from '@mui/icons-material';


export const routes = [
  { label: 'Dashboard', path: '/', element: <DashboardPage />, backgroundColor: '#EBF7FB', icon: <Dashboard /> },  
  { label: 'Classes', path: '/classes', element: <ClassesPage />, icon: <ClassOutlined /> },  
  { label: 'Students', path: '/students', element: <StudentPage />, icon: <School /> },
  { label: 'Attendance', path: '/attendances', element: <AttendancePage />, icon: <BarChart /> },
  { label: 'Score', path: '/scores', element: <ScorePage />, icon: <BarChart /> },
  { label: 'Calendar', path: '/calendars', element: <AttendancePage />, icon: <BarChart /> },
  { label: 'Setting', path: '/setting', element: <AttendancePage />, icon: <BarChart /> },
  
];


