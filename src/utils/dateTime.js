export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric', month: 'long', year: 'numeric'
  }).format(new Date(date));
};
