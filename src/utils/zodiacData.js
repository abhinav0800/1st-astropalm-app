export const getZodiacSign = (day, month) => {
  const signs = [
    { name: 'Capricorn', start: '12-22' }, { name: 'Aquarius', start: '01-20' },
    { name: 'Pisces', start: '02-19' }, { name: 'Aries', start: '03-21' },
    { name: 'Taurus', start: '04-20' }, { name: 'Gemini', start: '05-21' },
    { name: 'Cancer', start: '06-21' }, { name: 'Leo', start: '07-23' },
    { name: 'Virgo', start: '08-23' }, { name: 'Libra', start: '09-23' },
    { name: 'Scorpio', start: '10-23' }, { name: 'Sagittarius', start: '11-22' }
  ];
  const date = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  return signs.reverse().find(s => date >= s.start)?.name || 'Capricorn';
};
