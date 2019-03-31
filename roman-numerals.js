
let num = 0;

function toRoman(num) {
  if(num === 1) return 'I';
  if(num === 2) return 'II';
  if(num === 3) return 'III';
  if(num === 4) return 'IV';
  if(num === 5) return 'V';
  if(num == 6) return 'VI';
  if(num == 9) return 'IX';
  return num;
  console.log('* num *', num);
}




module.exports = {
  toRoman
}
