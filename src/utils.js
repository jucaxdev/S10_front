// utils.js
export const formatTime = (hour, minute) => {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    const formattedMinute = minute.toString().padStart(2, '0');
    return `${formattedHour}:${formattedMinute}${amPm}`;
  };