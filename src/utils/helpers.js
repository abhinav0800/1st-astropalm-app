export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const isToday = (dateString) => {
  const today = new Date().toISOString().split('T')[0];
  return dateString.split('T')[0] === today;
};
