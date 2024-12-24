export const formatDate = (date: string): string => {
    const newDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    };
    return newDate.toLocaleDateString('en-GB', options).replace(/ /g, ' ');
  };