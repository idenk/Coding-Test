function solution(s) {
  let answer = 'YES';
  let len = s.length;
  let string = s.toLowerCase();

  for (let i = 0; i < Math.floor(len / 2); i++) {
    let ascii = string[i].charCodeAt();
    if (ascii >= 97 && ascii <= 122) {
      if (string[i] !== string[len - i - 1]) {
        answer = 'NO';
        break;
      }
    }
  }

  return answer;
}

// 팰린드롬: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));

// 해설
// function solution(s) {
//   let answer = 'YES';
//   //* 정규식 사용: 알파벳을 제외한 나머지 문자를 빈문자열로 변경
//   s = s.toLowerCase().replace(/[^a-z]/g, '');
//   if (s.split('').reverse().join('') !== s) return 'NO';
//   return answer;
// }
