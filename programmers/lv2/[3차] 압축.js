function solution(msg) {
  const answer = [];
  const dictionary = [""];
  // 영어 대문자 입력
  for (let i = 0; i < 26; i++) dictionary.push(String.fromCharCode(65 + i));

  let idx = 0;
  while (idx < msg.length) {
    const [dIdx, str] = findLongestStr(msg, idx, dictionary);
    idx += str.length;

    answer.push(dIdx);
    console.log('dictionary',dictionary)
  }

  return answer;
}

// 배열에 존재하는 가장 긴 문자열을 찾는 함수
function findLongestStr(str, idx, arr) {
  let result = [0, ""]; // 배열 번호, 가장 긴 문자열
  for (let i = idx; i < str.length; i++) {
    const idx = arr.indexOf(result[1] + str[i]);
    if (idx >= 0) {
      result[1] += str[i];
      result[0] = idx;
      continue;
    } else {
      arr.push(result[1] + str[i]); // w+c를 사전에 추가
      break;
    }
  }
  return result;
}

console.log(solution("ABABABABABABABAB"));

// LZW(Lempel–Ziv–Welch) 압축

// 1. 영어 대문자 배열(사전)에서 현재 문자열의 일부로 시작하는 가장 긴 문자열을 확인하는 함수 정의
//    문자열을 순회하며 현재 문자+다음 문자를 더한 결과값이 사전에 있는지 확인하고 색인 번호 저장
//    없을 때까지 순회하고, 결과값에 그 다음 문자를 더하여 사전에 입력
// 2. 1번에서 정의한 함수를 이용해 색인 번호를 answer 배열에 입력