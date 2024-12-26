import { render } from '@testing-library/react';
import DashboardPage from '../../pages/dashboard';
import ClassesPage from '../../pages/classes';
import StudentPage from '../../pages/students';
import AttendancePage from '../../pages/attendance';
import ScorePage from '../../pages/score';
import SettingPage from '../../pages/setting';
import CalendarPage from '../../pages/calendar';

describe('Page Rendering', () => {
  it('renders DashboardPage without crashing', () => {
    render(<DashboardPage />);
  });

  it('renders ClassesPage without crashing', () => {
    render(<ClassesPage />);
  });

  it('renders StudentPage without crashing', () => {
    render(<StudentPage />);
  });

  it('renders AttendancePage without crashing', () => {
    render(<AttendancePage />);
  });

  it('renders ScorePage without crashing', () => {
    render(<ScorePage />);
  });

  it('renders SettingPage without crashing', () => {
    render(<SettingPage />);
  });

  it('renders CalendarPage without crashing', () => {
    render(<CalendarPage />);
  });
});