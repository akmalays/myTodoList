export function convertDate(dateString: string): string {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date: Date = new Date(dateString);
  const day: number = date.getUTCDate();
  const month: number = date.getUTCMonth();
  const year: number = date.getUTCFullYear();

  return `${day} ${months[month]} ${year}`;
}
