
let num = 0;

function toRoman(num) {
  let numString = num.toString();
  if(numString === '1' && numString.length === 1) return 'I';
  if(numString === '2' && numString.length === 1) return 'II';
  if(numString === '3' && numString.length === 1) return 'III';
  if(numString === '4' && numString.length === 1) return 'IV';
  if(numString === '5' && numString.length === 1) return 'V';
  // if(num == 6) return 'VI';
  // if(num == 9) return 'IX';

  // if()
  console.log('* num *', num);
  console.log('* numString *', numString);
  return num;
}




module.exports = {
  toRoman
}
