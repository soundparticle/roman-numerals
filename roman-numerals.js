
let num = 0;

function toRoman(num) {

  let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let romanNum = '';

  for(let i of Object.keys(roman)) {
    let q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    romanNum += i.repeat(q);
    console.log('** q **', q);
  }

  return romanNum;
}

module.exports = {
  toRoman
}
