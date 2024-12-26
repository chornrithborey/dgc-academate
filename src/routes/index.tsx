import DashboardPage from '../pages/dashboard';
import ClassesPage from '../pages/classes';
import StudentPage from '../pages/students';
import AttendancePage from '../pages/attendance';
import ScorePage from '../pages/score';
import SettingPage from '../pages/setting';
import CalendarPage from '../pages/calendar';
import { Dashboard, ClassOutlined, School, BarChart, CreditScore,CalendarToday, Settings  } from '@mui/icons-material';


export const routes = [
  { label: 'Dashboard', path: '/', element: <DashboardPage />, backgroundColor: '#EBF7FB', icon: <Dashboard /> },  
  { label: 'Classes', path: '/classes', element: <ClassesPage />, icon: <ClassOutlined /> },  
  { label: 'Students', path: '/students', element: <StudentPage />, icon: <School /> },
  { label: 'Attendance', path: '/attendances', element: <AttendancePage />, icon: <BarChart /> },
  { label: 'Score', path: '/scores', element: <ScorePage />, icon: <CreditScore /> },
  { label: 'Calendar', path: '/calendars', element: <CalendarPage />, icon: <CalendarToday /> },
  { label: 'Setting', path: '/setting', element: <SettingPage />, icon: <Settings /> },
  
];


