import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentPage from '../../pages/students'; // adjust this import path according to your file structure

describe('StudentPage', () => {


  test('renders without crashing', () => {
    render(<StudentPage />);

    // test page title
    expect(
      screen.getByText('Students')
    ).toBeInTheDocument();
  });


  // test subheader
  test('renders subheader', () => {
    render(<StudentPage />);
    expect(
      screen.getByText('Manage and organize students')
    ).toBeInTheDocument();
  });

  
});
