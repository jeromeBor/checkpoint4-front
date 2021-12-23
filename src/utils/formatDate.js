const formatDate = (timestamp) => {
  const ts = new Date(timestamp);
  const months = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];
  const year = ts.getFullYear();
  const month = ts.getMonth();
  let day = ts.getDate();
  let hour = ts.getHours();
  let min = ts.getMinutes();

  if (day < 10) {
    day = `0${day}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }

  return `${day} ${months[month]} ${year} à  ${hour}h${min}`;
};

const formatDateUnix = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  let day = `${date.getDate()}`;
  let month = `${date.getMonth() + 1}`;

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  // Will display time in 10:30:23 format
  const formattedTime = `${day}/${month} à ${hours}h `;

  return formattedTime;
};

const formatDateSimple = (timestamp) => {
  const ts = new Date(timestamp);

  const year = ts.getFullYear();
  let month = ts.getMonth();
  let day = ts.getDate();
  let hour = ts.getHours();
  let min = ts.getMinutes();

  if (day < 10) {
    day = `0${day}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `le ${day}/${month}/${year} à ${hour}h${min}`;
};

export { formatDate, formatDateUnix, formatDateSimple };
