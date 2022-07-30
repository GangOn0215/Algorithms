function solution(arr) {
  var answer = 0;

  answer = arr.reduce((preValue, currValue) => preValue + currValue);
  answer = answer / arr.length;

  return answer;
}

solution([1, 2, 3, 4]);
