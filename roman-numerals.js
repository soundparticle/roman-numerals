
let num = 0;

function toRoman(num) {
  let numString = num.toString();
  if(numString === '1' && numString.length === 1) return 'I';
  if(numString === '2' && numString.length === 1) return 'II';
  if(numString === '3' && numString.length === 1) return 'III';
  if(numString === '4' && numString.length === 1) return 'IV';
  if(numString === '5' && numString.length === 1) return 'V';
  if(numString === '6' && numString.length === 1) return 'VI';
  if(numString === '9' && numString.length === 1) return 'IX';

  // if(numString.length === 2 && ) return 'XXVII';

  // if()
  console.log('* num *', num);
  console.log('* numString *', numString.charAt(1));
  return num;
}




module.exports = {
  toRoman
}
