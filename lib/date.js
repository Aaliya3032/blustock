export const formatMyDate = (date,) => {

  if(!date) return "Invalid Date"
  const parsedDate = new Date(date)
  if(isNaN(parsedDate)) return "Invalid Date"

    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-IN", options).format(parsedDate);
  }