/**
 * Title: a common divisor, a common multiple
 * Author: Coxe Monkey
 * Create Date: 2022-07-25
 * Last Update Date:
 */

const divisor = (n, m) => {
  let result,
    min,
    max = 0;

  if (n < m) {
    min = n;
    max = m;
  } else {
    min = m;
    max = n;
  }

  result = max % min;

  if (max % min == 0) {
    result = min;
  }

  while (result != 0) {
    if (min % result == 0) {
      break;
    }
    result = min % result;
  }

  return result;
};

const multiple = (n, m, g) => {
  return (n * m) / g;
};

const n = 1650;
const m = 12;
const g = divisor(n, m);
const l = multiple(n, m, g);

function solution(n, m) {
  var answer = [];

  answer[0];
  return answer;
}
