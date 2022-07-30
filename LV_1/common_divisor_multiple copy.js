/**
 * Title: a common divisor, a common multiple
 * Author: Coxe Monkey
 * Create Date: 2022-07-25
 * Last Update Date:
 */

function solution(n, m) {
  var answer = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);

  answer[0] = max % min;

  if (max % min == 0) {
    answer[0] = min;
  } else {
    while (answer[0] != 0) {
      if (min % answer[0] == 0) {
        break;
      }

      answer[0] = min % answer[0];
    }
  }

  answer[1] = (n * m) / answer[0];

  return answer;
}

console.log(solution(1550, 15));
