function solution(str1, str2) {
  let answer = 0;
  const inter = [];
  const union = [];

  const arr1 = makeSet(str1).sort();
  const arr2 = makeSet(str2).sort();

  // console.log(arr1);
  // console.log(arr2);
  
  // 교집합 합집합 구하기
  for (let el of arr1) {
    let idx = arr2.indexOf(el);
    if (idx >= 0) {
      inter.push(el);
      arr2.splice(idx, 1);
    }
    union.push(el);
  }
  union.push(...arr2);

  // console.log("inter", inter);
  // console.log("union", union);

  if (union.length === 0) answer = 1;
  else answer = inter.length / union.length;
  answer = Math.floor(answer * 65536);

  return answer;
}

function makeSet(str) {
  const arr = [];
  const regExp = /^[a-zA-Z]*$/;
  for (let i = 0; i < str.length - 1; i++) {
    const el = str[i] + str[i + 1];
    if (regExp.test(el)) arr.push(el.toLowerCase());
  }
  return arr;
}

console.log(solution("FRANCE", "french"));

// 두 문자열을 두 글자씩 끊어 다중 집합으로 만듬
// (공백, 특수 문자가 있으면 제거)

// 집합1을 순회하며
// 집합1의 요소가 집합2에 있으면 집합2에서 해당 요소를 지우며 교집합에 push
// 집합1의 요소를 합집합에 push
// 남은 집합2의 요소를 합집합에 push