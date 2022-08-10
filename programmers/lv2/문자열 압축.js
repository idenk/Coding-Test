function solution(s) {
  let answer = [];
  let tmp = [s.length]; // 압축이 불가능한 경우 입력
  const compareLen = Math.floor(s.length / 2);

  for (let i = 1; i <= compareLen; i++) {
    let subStr = '';
    let cnt = 1;
    for (let j = 0; j < s.length; j += i) {
      const sub1 = s.substring(j, j + i); 
      const sub2 = s.substring(j + i, j + i * 2);
      // console.log(j, sub1, sub2);
      if (sub1 === sub2) {
        cnt++;
      } else {
        if (cnt === 1) {
          subStr = subStr + sub1;
        } else {
          subStr = subStr + cnt + sub1;
          cnt = 1;
        }
      }
    }

    // console.log(subStr);
    tmp.push(subStr.length);
  }

  answer = Math.min(...tmp);
  return answer;
}

// n의 길이를 가진 문자열이 있을 때
// 문자열을 1개 단위로 압축한 경우, 2개, 3개, ...,n/2의 길이로 압축했을 때의 각 문자열 길이를 저장
// 1. i가 1부터 Math.floor(n / 2)까지 순회
// 2.   j가 0부터 n까지 순회
// 2.   j부터 j+i-1, j+1부터 j+i*2-1로 자른 문자열을 비교
// 3.   일치하면 압축, j 증가
// 4.   j의 순회가 끝나면 압축된 문자열의 길이를 저장
// 5. i의 순회가 끝나면 압축된 문자열의 길이 중 가장 짧은 문자열 리턴

let result = solution('aabbaccc');
console.log(result);
