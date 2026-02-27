const getPartOfDay = (hour) => {
  if (hour >= 5 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 21) return "evening";
  return "night";
};

export const consoleGreeting = () => {
  const hour = new Date().getHours();
  const partOfDay = getPartOfDay(hour);
  return `good ${partOfDay}...`;
};
