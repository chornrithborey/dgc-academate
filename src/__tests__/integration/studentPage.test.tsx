import { render, screen } from "@testing-library/react";
import StudentPage from "../../pages/students";

describe('StudentPage Integration Test', () => {
  it('should render the essential page elements', () => {
    render(<StudentPage />);

    // Check if the DashboardHeader is rendered
    expect(screen.getByText('Students')).toBeInTheDocument();
    
    // Check if the HeaderSection is rendered
    expect(screen.getByText('Manage and organize students')).toBeInTheDocument();

    // Check if the StudentDataGrid (or part of it) is rendered
    const studentDataGridElements = screen.getAllByText('Student Details');
    expect(studentDataGridElements.length).toBeGreaterThan(0);
  });
});
