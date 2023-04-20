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

export function getColor(priority: string) {
  switch (priority) {
    case "very-high":
      return "#ED4C5C";
    case "high":
      return "#F8A541";
    case "normal":
      return "#00A790";
    case "low":
      return "#428BC1";
    case "very-low":
      return "#8942C1";
    default:
      return "Unknown";
  }
}
