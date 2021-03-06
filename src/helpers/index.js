// @flow

const defaultGreeting: string = "thanks for looking...";

export const consoleGreeting = (): string => {
  const now = new Date();
  const regExpGreeting = /^(\d+):.+([APM]{2})$/i;
  const timeOfDay = now.toLocaleTimeString().match(regExpGreeting);
  let partOfDay = "day";
  if (timeOfDay === null) {
    return defaultGreeting;
  }
  switch (timeOfDay[2]) {
    case "AM":
      switch (Number(timeOfDay[1])) {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          partOfDay = "morning";
          break;
        case 11:
          partOfDay = "day";
          break;
        default:
          partOfDay = "night"; // 12am
      }
      break;
    case "PM":
      switch (Number(timeOfDay[1])) {
        case 1:
        case 2:
        case 3:
        case 4:
          partOfDay = "afternoon";
          break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          partOfDay = "evening";
          break;
        case 11:
          partOfDay = "night";
          break;
        default:
          partOfDay = "day"; // 12pm
      }
      break;
    default:
      return defaultGreeting;
  }
  return `good ${partOfDay}...`;
};
