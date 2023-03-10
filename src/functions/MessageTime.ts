export class MessageTime {
  timeConverter = (timestamp: number) => {
    const date = new Date(timestamp);
    let hours = String(date.getHours());
    let minutes = String(date.getMinutes());

    if (date.getHours() < 10) hours = "0" + hours;
    if (date.getMinutes() < 10) minutes = "0" + minutes;

    let string = String(hours) + ":" + String(minutes);
    return string;
  };

  dateConverter = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    let day = String(date.getDate());
    let month = String(date.getMonth() + 1);
    let year = String(date.getFullYear());

    if (date.getDate() < 10) day = "0" + day;
    if (date.getMonth() + 1 < 10) month = "0" + month;

    let string = day + "." + month + "." + year;
    return string;
  };
}
