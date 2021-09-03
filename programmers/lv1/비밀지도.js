function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++){
    const decoded1 = getBinary(n, arr1[i]);
    const decoded2 = getBinary(n, arr2[i]);
    
    let decodedMix = "";
    for (let j = 0; j < n; j++) {
      if (decoded1[j] === '0' && decoded2[j] === '0') {
        decodedMix += ' ';
      } else {
        decodedMix += '#';
      }
    }
    result.push(decodedMix);
  }

  return result;
}

function getBinary(n, number) {
  let result = number.toString(2);
  while (result.length < n) {
    result = '0' + result;
  }
  return result;
}

let n = 6;
let arr1 = [46, 33, 33, 22, 31, 50];
let arr2 = [27, 56, 19, 14, 14, 10];
solution(n, arr1, arr2);


// 1. arr1, arr2를 2진법으로 매핑
// 2. 매핑된 배열의 각 요소를 더한 배열 생성
// 3. 해당 배열의 0은 공백, 1이상은 #으로 변경하며 문자열로 매핑