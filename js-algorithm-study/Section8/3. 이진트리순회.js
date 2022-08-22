function solution(n) {
  let answer = '';
  let last = 7
  function preOrder(v) {
    if (v > last) return;
    else {
      answer += v + ' ';
      preOrder(v * 2);
      preOrder(v * 2 + 1);
    }
  }
  function inOrder(v) {
    // if (v > last) return;
    // else {
      if (v * 2 <= last) inOrder(v * 2);  // 자식 노드가 존재하면, 순회
      answer += v + ' ';
      if (v * 2 + 1 <= last) inOrder(v * 2 + 1);
    // }
  }
  function postOrder(v) {
    if (v > last) return;
    else {
      postOrder(v * 2);
      postOrder(v * 2 + 1);
      answer += v + ' ';
    }
  }
  inOrder(n);

  return answer;
}

console.log(solution(1));

// 해설
// function solution(n) {
//   let answer = '';
//   function DFS(v) {
//     if (v > 7) return;
//     else {
//       answer += v + ' ';
//       DFS(v * 2);
//       DFS(v * 2 + 1);
//     }
//   }
//   DFS(n);
//   return answer;
// }

// 트리 순회는 각 노드를 한 번만 방문하는 것
// 루트를 방문하는 순서를 기준으로 전위, 중위, 후위 순회로 나뉨
// 이 순서는 모든 서브 트리에 대해서도 적용됨

// 중위 순회 스택 프레임

// | D(8) | -> return 
// | D(4) |
// | D(2) |
// | D(1) |

// | D(4) | -> 4 출력
// | D(2) |
// | D(1) |

// | D(9) | -> return
// | D(4) | -> return
// | D(2) |
// | D(1) |

// | D(2) | -> 2출력
// | D(1) |

// | D(5) | 
// | D(2) |
// | D(1) |