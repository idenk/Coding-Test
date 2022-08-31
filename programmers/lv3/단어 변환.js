// 하나의 알파벳만 다른지 판별하는 함수
function checkWords(word1, word2) {
  let count = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      count++;
      if (count >= 2) return false;
    }
  }

  if (count === 1) return true;
  else return false;
}

function solution(begin, target, words) {
  let answer = 0;

  const queue = [begin];
  const ch = new Array(words.length).fill(false);

  // BFS
  while (queue.length > 0) {
    answer++;
    const curWord = queue.pop();

    for (let i = 0; i < words.length; i++) {
      if (checkWords(curWord, words[i]) && !ch[i]) {
        if (words[i] === target) return answer;
        ch[i] = true;
        queue.push(words[i]);
      }
    }
  }
  return 0;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));

// begin으로 시작. words내에서 한 단어만 변경시키면서 target까지 최소 단계를 거쳐 가는 방법 -> BFS
// 1. 큐에 begin으로 변환시킬 수 있는 단어를 찾아 삽입
// 2. 해당 단어와 단어 하나만 차이가 나는 모든 단어를 큐에 삽입하며 BFS. target 발견 시 종료
// 3. 단계 2가 몇 번 수행되는지 기록
