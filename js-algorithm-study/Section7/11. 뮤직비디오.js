function solution(m, songs) {
  let answer;
  let arr = [{ sum: 0, list: [] }];
  const songPlayTime = songs.reduce((acc, num) => acc + num, 0);

  let maybe = parseInt(songPlayTime / m);
  let before = null;
  let isDivied = false;

  // 값을 찾을 때까지 반복
  while (isDivied === false) {
    let i = 0;
    // maybe 값으로 영상을 나눴을 때 DVD가 몇 장인지 계산
    songs.forEach((el) => {
      if (arr[i].sum + el > maybe) {
        i++;
        arr[i] = { sum: 0, list: [] };
      }
      arr[i].list.push(el);
      arr[i].sum += el;
    });

    if (arr.length === m) {
      // m장이면 maybe - 1 용량으로 가능한지 재시도
      before = maybe;
      maybe -= 1;
    } else if (arr.length > m) {
      // 용량이 모자라면
      if (before && before > 0) {
        // 이전 maybe(before)가 존재하면 정답
        answer = before;
        isDivied = true;
        break;
      } else {
        maybe += 1; // 용량 + 1
      }
    } else {
      // 용량이 충분하면
      maybe -= 1; // 용량 - 1
    }
    arr = [{ sum: 0, list: [] }]; // 배열 초기화하고 재시도
  }

  return answer;
}

// m개의 DVD에 songs를 순서대로 녹화.
// m등분 했을 때 DVD의 최소 용량?

// 각 요소를 모두 더한 값을 sum
// sum / m = v
// v(maybe)로 m등분이 가능한지 확인
// 가능하면 v - 1로 m 등분이 가능한지 확인 -> 그 다음 확인했을 때 불가능하면 이전 v값이 정답
// 불가능하면 v + 1로 등분이 가능한지 확인

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

//! 해설: 이분 탐색
// capacity로 DVD를 몇 장 담을 수 있는지 계산하는 함수
function count(songs, capacity) {
  let cnt = 1,
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      // 더 저장할 수 없음
      cnt++;
      sum = x;
    } else sum += x; // 누적
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  // 범위를 절반씩 좁혀가며 탐색
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

// 이분 탐색: 최솟값, 최댓값 먼저 잡기
// 최솟값: 배열 중 가장 큰 수 -> left, 최댓값: 배열의 값을 모두 더한 값 -> right
// answer에 정답이 저장돼도 left, right가 교차할 때까지 탐색 -> 최적의 값을 구하기 위함