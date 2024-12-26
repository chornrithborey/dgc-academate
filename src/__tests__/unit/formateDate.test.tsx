import { formatDate } from '../../utils/formatDate';

describe('formatDate', () => {
    it('should format date correctly', () => {
        const date = '2023-10-05';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('05 Oct 2023');
    });

    it('should handle invalid date strings gracefully', () => {
        const date = 'invalid-date';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('Invalid Date');
    });

    it('should format date with different input format', () => {
        const date = 'October 5, 2023';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('05 Oct 2023');
    });

    it('should format date with time included', () => {
        const date = '2023-10-05T14:48:00.000Z';
        const formattedDate = formatDate(date);
        expect(formattedDate).toBe('05 Oct 2023');
    });
});