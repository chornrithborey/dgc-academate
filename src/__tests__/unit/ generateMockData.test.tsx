import  {generateMockData} from '../../utils/mockDataGenerator';

describe('generateMockData', () => {
    it('should generate an array with the correct number of rows', () => {
        const numRows = 5;
        const result = generateMockData(numRows);
        expect(result).toHaveLength(numRows);
    });

    it('should generate students with valid properties', () => {
        const numRows = 3;
        const result = generateMockData(numRows);
        
        result.forEach(student => {
            expect(student).toHaveProperty('id');
            expect(student).toHaveProperty('firstName');
            expect(student).toHaveProperty('lastName');
            expect(student).toHaveProperty('age');
            expect(student).toHaveProperty('classroom');
            expect(student).toHaveProperty('dateOfBirth');
            expect(student).toHaveProperty('attendance');
            expect(student).toHaveProperty('score');
        });
    });

    it('should generate random first and last names from the predefined lists', () => {
        const numRows = 10;
        const result = generateMockData(numRows);
        const firstNames = ['Jon', 'Cersei', 'Jaime', 'Arya', 'Daenerys', 'Sansa'];
        const lastNames = [
            'Basic Course', 'Advance Course', 'Medium Course', 'Pro Course'
        ];

        result.forEach(student => {
            expect(firstNames).toContain(student.firstName);
            expect(lastNames).toContain(student.lastName);
        });
    });

    it('should assign random attendance statuses', () => {
        const numRows = 5;
        const result = generateMockData(numRows);
        const attendanceStatuses = ['Present', 'Absent', 'Late', '-'];

        result.forEach(student => {
            expect(attendanceStatuses).toContain(student.attendance);
        });
    });

    it('should assign a current date as date of birth', () => {
        const numRows = 3;
        const result = generateMockData(numRows);
        
        result.forEach(student => {
            const today = new Date().toISOString().split('T')[0];
            const dateOfBirth = student.dateOfBirth ? new Date(student.dateOfBirth) : null;
            expect(dateOfBirth).toBeInstanceOf(Date);
        });
    });
  

    it('should generate random scores as string', () => {
        const numRows = 3;
        const result = generateMockData(numRows);

        result.forEach(student => {
            expect(typeof student.score).toBe('string');
        });
    });
});
