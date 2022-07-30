function solution(nums) {
  let answer = 0;

  let n = nums.length;
  let getBall = n / 2;
  let doNotOverlap = [];

  let j = 0;
  for (let i = 0; i < n; i++) {
    // 중복되지 않으면
    if (doNotOverlap.indexOf(nums[i]) == -1) {
      doNotOverlap[j++] = nums[i];
    }
  }

  getPoketmonNum = doNotOverlap.length - getBall;

  if (getPoketmonNum >= 0) {
    answer = getBall;
  } else {
    answer = doNotOverlap.length;
  }

  return answer;
}
