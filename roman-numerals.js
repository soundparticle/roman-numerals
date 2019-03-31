
let num = 0;

function toRoman(num) {
  if(num === 1) return 'I';
  if(num === 2) return 'II';
  if(num === 3) return 'III';
  if(num === 4) return 'IV';
  return num;
  console.log('* num *', num);
}




module.exports = {
  toRoman
}
