const formatDate = (timestamp) => {
  const ts = new Date(timestamp);
  const months = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];
  const year = ts.getFullYear();
  const month = ts.getMonth();
  let day = ts.getDate();
  let hour = ts.getHours();
  let minute = ts.getMinutes();

  if (day < 10) {
    day = `0${day}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }

  return `le ${day} ${months[month]} ${year} - ${hour}:${minute}`;
};
const showOnlyHour = (timestamp) => {
  const ts = new Date(timestamp);
  let hour = ts.getHours();
  let minute = ts.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return `${hour}:${minute}`;
};

const formatDateUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  let day = `${date.getDate()}`;
  let month = `${date.getMonth() + 1}`;

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  // Will display time in 10:30:23 format
  const formattedTime = `${hours}:${minutes.substr(-2)} le ${day}/${month}`;

  return formattedTime;
};

export { formatDate, showOnlyHour, formatDateUnix };
