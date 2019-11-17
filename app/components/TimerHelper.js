function formatTimeToString(timeNow) {
  //Converts millisecond numeric to a string in the following format:
  // "hh:mm:ss" "00:00:00"
  //HOUR IS NOT SUPPORT YET

  //timeNow is in milliseconds

  let sec_int = Math.floor(timeNow / 1000); // get ms to sec_int
  let hours = Math.floor(sec_int / 3600); // hours are not supported yet
  let minutes = Math.floor((sec_int - hours * 3600) / 60);
  let seconds = sec_int - hours * 3600 - minutes * 60;

  let formattedTime;

  formattedTime = `${minutes > 10 ? minutes : '0' + minutes.toString(10)}: ${
    seconds > 10 ? seconds : '0' + seconds.toString(10)
  }`;

  return formattedTime;
}

export { formatTimeToString };
