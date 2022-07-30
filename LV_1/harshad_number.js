/**
 *
 * Title: Harshard Number
 * Author: Jun Young
 * Create Date: 2022-07-22
 * Last Update Date:
 *
 */

function solution(x) {
  var answer = true;

  let sum = 0;
  x = x.toString();

  for (let i = 0; i < x.length; i++) {
    tempX = parseInt(x[i]);

    sum += tempX;
  }

  console.log(Number.isInteger(parseInt(x) / sum));
  return answer;
}

solution(12);
