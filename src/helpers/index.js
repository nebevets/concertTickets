export const importImages = (requireImage) => {
  const imagePaths = {};
  requireImage
    .keys()
    .map(fileInfo => 
      imagePaths[fileInfo.replace('./', '')] = requireImage(fileInfo)
    );
  return imagePaths;
}
export const consoleGreeting = () => {
  const now = new Date();
  const regExpGreeting = /^(\d+):.+([APM]{2})$/i;
  const timeOfDay = now
    .toLocaleTimeString()
    .match(regExpGreeting);
  let partOfDay = 'day';
  switch(timeOfDay[2]){
    case 'AM':
      switch(Number(now.getHours())){
        case 1:
        case 2:
        case 3:
        case 4:
          partOfDay = 'night';
          break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          partOfDay = 'morning';
          break;
        default:
          partOfDay = 'day';
      }
      break;
    case 'PM':
        switch(Number(now.getHours())){
          case 1:
          case 2:
          case 3:
          case 4:
            partOfDay = 'afternoon';
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
            partOfDay = 'evening';
            break;
          default:
            partOfDay = 'night';
        }
        break;
    default:
  }
  return `good ${partOfDay}...`
}