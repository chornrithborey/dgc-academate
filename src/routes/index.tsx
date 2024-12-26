import DashboardPage from '../pages/dashboard';
import ClassesPage from '../pages/classes';
import StudentPage from '../pages/students';
import AttendancePage from '../pages/attendance';
import ScorePage from '../pages/score';
import SettingPage from '../pages/setting';
import CalendarPage from '../pages/calendar';
import { SettingsOutlined } from '@mui/icons-material';
import svgToIcon  from '../utils/svgToIcon';

export const routes = [
  { label: 'Dashboard', path: '/', element: <DashboardPage />, backgroundColor: '#EBF7FB', icon: svgToIcon('../assets/menu/dashboard.svg') },
  { label: 'Classes', path: '/classes', element: <ClassesPage />, icon: svgToIcon('../assets/menu/classes.svg')},
  { label: 'Students', path: '/students', element: <StudentPage />, icon: svgToIcon('../assets/menu/student.svg') },
  { label: 'Attendance', path: '/attendances', element: <AttendancePage />, icon: svgToIcon('../assets/menu/attendance.svg') },
  { label: 'Score', path: '/scores', element: <ScorePage />, icon: svgToIcon('../assets/menu/score.svg') },
  { label: 'Calendar', path: '/calendars', element: <CalendarPage />, icon: svgToIcon('../assets/menu/calendar.svg')},
  { label: 'Setting', path: '/setting', element: <SettingPage />, icon: <SettingsOutlined /> },
];
