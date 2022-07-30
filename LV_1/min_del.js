function solution(arr) {
  var answer = [];
  let min = 0;

  min = Math.min(...arr);
  arr.splice(arr.indexOf(min), 1);
  answer = arr;

  return answer;
}

console.log(solution([2, 4, 1, 5, 6]));
