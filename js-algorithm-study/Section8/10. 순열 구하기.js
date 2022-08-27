function solution(m, arr) {
  const answer = [];

  function aux(array, bucket, count) {
    if (count === m) {
      answer.push(bucket);
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        // 재귀 과정에서 array의 length가 감소함(선택한 요소를 배열에서 제거하기 때문)
        // [3, 6, 9]에서 3을 선택하면 array는 [6, 9]
        const clone = array.slice(); // 배열 복사
        const choice = clone.splice(i, 1); // 복사한 배열에서 하나 선택
        aux(clone, bucket.concat(choice), count + 1); // 선택한 요소를 배열에서 제거하며 재귀 호출
      }
    }
  }
  aux(arr, [], 0);
  return answer;
}

// arr에서 m개를 뽑아 나열하는 방법, 순열

let arr = [3, 6, 9];
console.log(solution(2, arr));

// 해설
function solution(m, arr) {
  let answer = [],
    n = arr.length;
  let ch = Array.from({ length: n }, () => 0); // 체크 배열
  let tmp = Array.from({ length: m }, () => 0); // 선택 배열
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;  // 체크 (중복 방지)
          tmp[L] = arr[i];  // 입력
          DFS(L + 1);
          ch[i] = 0;  // 트리에서 back하는 지점
        }
      }
    }
  }
  DFS(0);
  return answer;
}

// 체크 배열로 중복 검사
// tmp 배열에 뽑은 요소 저장

//    3      x     2 (<- 두번째 나열되는 것은 하나 빠져야 함)
// [3,6,9]

//                      D(0)
//* idx         0/       1|       2\
//           D(1)       D(1)       D(1)
//*     0/  1|  2\
//         D(2)  D(2)
//!  skip [3 6] [1 3]  <- tmp에 입력된 요소

// D(0)에서 0번 인덱스를 뽑아 tmp에 push하면 ch[0]이 1로 변경
// D(1)에서 0번 인덱스를 뽑으려했더니 ch[0]의 값이 1, 스킵되고 1번 인덱스 선택하고 tmp 입력 + ch[1]을 1로 변경
// D(2)를 호출하고 answer에 입력, 리턴된 후에는(트리에서 백) 체크 해제 ch[1] = 0

// function solution(m, arr) {
//   let answer = [],
//   n = arr.length;
//   let ch = Array.from({ length: n }, () => 0);
//   let tmp = [];
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp.push(arr[i]);
//           DFS(L + 1);
//           ch[i] = 0;
//           tmp.pop();
//         }
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }
