import { format } from 'date-fns';

export default function DateComponent({ dates }) {
  const formattedDates = dates.map((dateString) => {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  });

  const firstDate = formattedDates[0];
  const lastDate = formattedDates[formattedDates.length - 1];

  const formattedFirstDate = formattedDates.length > 1 ? format(firstDate, 'MMMM d') : format(firstDate, 'MMMM d, yyyy');
  const formattedLastDate = format(lastDate, 'MMMM d, yyyy');

  const formattedDate =
    formattedDates.length > 1 ? `${formattedFirstDate} - ${formattedLastDate}` : formattedFirstDate;

  return <time dateTime={dates.join(' ')}>{formattedDate}</time>;
}