function pluralize(value) {
  return value > 1 ? "s" : "";
}

function timeWas(time, now = Date.now()) {
  const millisecondsElapsed = Math.abs(now - time);
  const secondsElapsed = Math.floor(millisecondsElapsed / 1000);

  const seconds = Math.floor(secondsElapsed % 60);
  const minutes = Math.floor(secondsElapsed / 60) % 60;
  const hours = Math.floor(secondsElapsed / 3600) % 24;
  const days = Math.floor(secondsElapsed / 86400) % 7;
  const weeks = Math.floor(secondsElapsed / (86400 * 7)) % 5;
  const months = Math.floor(secondsElapsed / (86400 * 30)) % 12;
  const years = Math.floor(secondsElapsed / (86400 * 30 * 12));

  return years
    ? years + ` year${pluralize(years)} ago`
    : months
    ? months + ` month${pluralize(months)} ago`
    : weeks
    ? weeks + ` week${pluralize(weeks)} ago`
    : days
    ? days + ` day${pluralize(days)} ago`
    : hours
    ? hours + ` hour${pluralize(hours)} ago`
    : minutes
    ? minutes + ` minute${pluralize(minutes)} ago`
    : seconds
    ? seconds + ` second${pluralize(seconds)} ago`
    : "just now";
}

export { timeWas };
