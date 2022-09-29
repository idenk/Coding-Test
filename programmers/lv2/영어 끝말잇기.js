function solution(n, words) {
  for (let i = 1; i < words.length; i++) {
    // console.log(words.slice(0, i));
    const lastAlphabet = words[i - 1][words[i - 1].length - 1];
    // 끝말잇기 조건에 맞지 않거나 이미 말한 단어를 말하는 경우
    if (words[i][0] !== lastAlphabet || words.slice(0, i).includes(words[i])) {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}

// let input1 = ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'];
// console.log(solution(3, input1));

let input2 = ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'];
console.log(solution(2, input2));

// n: 사람수
// 리턴값: [가장 먼저 탈락하는 사람의 번호, 해당 사람이 탈락한 차례]

// words 순회 시
// idx를 n으로 나눈 나머지 + 1: n번째 사람
// idx를 n으로 나눈 정수 값 + 1: n번째 사람이 탈락한 차례
