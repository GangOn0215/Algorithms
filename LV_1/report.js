function solution(id_list, report, k) {
  var answer = [];

  let getReportList = new Array();
  let compare = new Array();
  let banList = new Array();
  let answerList = new Array();

  for (let i = 0; i < id_list.length; i++) {
    let kakaoUser = id_list[i];

    banList[kakaoUser] = 0;
    getReportList[kakaoUser] = 0;
    answerList[kakaoUser] = 0;
    compare[kakaoUser] = new Array();
  }

  // 중복 신고 방지 코드 + 데이터 정리
  for (let i = 0; i < report.length; i++) {
    const reporter = report[i].split(' ')[0];
    const getReport = report[i].split(' ')[1];

    if (compare[reporter].length == 0) {
      compare[reporter].push(getReport);
    }

    if (compare[reporter].indexOf(getReport) < 0) {
      compare[reporter].push(getReport);
    }
  }

  // 신고 당한 횟수 저장하는 코드
  for (const property in compare) {
    for (let i = 0; i < compare[property].length; i++) {
      getReportList[compare[property][i]]++;

      if (getReportList[compare[property][i]]) {
      }
    }
  }

  // 벤 리스트 뽑아주는 코드
  for (const property in getReportList) {
    if (getReportList[property] >= k) {
      banList[property] = 1;
    }
  }

  // 결과 리스트 뽑아주는 코드
  for (const property in compare) {
    for (let i = 0; i < compare[property].length; i++) {
      if (banList[compare[property][i]]) {
        answerList[property]++;
      }
    }
  }

  let i = 0;
  for (const property in compare) {
    answer[i++] = answerList[property];
  }

  return answer;
}

solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
  2,
);
