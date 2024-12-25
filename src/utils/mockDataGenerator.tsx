
import { StudentRow } from "../types/student";
import { formatDate } from "./formatDate";

export const generateMockData = (numRows: number): StudentRow[] => {
    const firstNames = ["Jon", "Cersei", "Jaime", "Arya", "Daenerys", "Sansa"];
    const lastNames = [
      "Basic Course",
      "Advance Course",
      "Medium Course",
      "Pro Course",
    ];
    const classrooms = [101, 102, 103, 104, 105];
    const attendanceStatuses = ["Present", "Absent", "Late", "-"];
  
    return Array.from({ length: numRows }, (_, id) => ({
      id: id + 1,
      firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
      lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
      age: Math.floor(Math.random() * 100),
      classroom: classrooms[Math.floor(Math.random() * classrooms.length)],
      dateOfBirth: formatDate(new Date().toISOString()),
      attendance:
        attendanceStatuses[Math.floor(Math.random() * attendanceStatuses.length)],
        score: '0',
    }));
  };



