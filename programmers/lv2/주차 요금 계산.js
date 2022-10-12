function solution(fees, records) {
  let answer = [];
  const map = new Map();
  let arr = [];

  for (let i = records.length - 1; i >= 0; i--) {
    const [time, carNum, log] = records[i].split(" ");

    if (!map.has(carNum)) { // 해시맵에 등록되지 않은 챠량 번호(첫 등록)
      if (log === "IN") { // 출차 시간이 없었던 경우 23:59에 출차한 것으로 간주
        map.set(carNum, [diffTime("23:59", time)]);
      } else {
        map.set(carNum, [0, time]);
      }
    } else { // 해시 맵에 등록된 차량 번호
      const info = map.get(carNum);
      if (info.length >= 2) { // 이미 출차 시간이 등록된 경우
        map.set(carNum, [info[0] + diffTime(info[1], time)]);
      } else {
        map.set(carNum, [info[0], time]);
      }
    }
  }

  for (let info of map) {
    arr.push([Number(info[0]), ...info[1]]);
  }

  arr.sort((a, b) => a[0] - b[0]);

  for (let info of arr) {
    const accTime = info[1];
    let fee = 0;
    if (accTime <= fees[0]) fee = fees[1];
    else {
      fee = fees[1] + Math.ceil((accTime - fees[0]) / fees[2]) * fees[3];
    }
    answer.push(fee);
  }

  return answer;
}

function diffTime(time1, time2) {
  return Math.abs(timeToMin(time2) - timeToMin(time1));
}

function timeToMin(time) {
  const [hour, min] = time.split(":");
  return Number(hour) * 60 + Number(min);
}

let fees = [180, 5000, 10, 600];
// 기본 시간(분), 기본 요금(원), 단위 시간(분), 단위 요금(원)
let records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(fees, records));

// 차량별 누적 주차 요금 계산
// 1. records를 역순으로 순회
// 1-1. 해시맵에 키:값을 차량 번호: [누적 주차 시간(분), 마지막 출차 시간]으로 생성
//      맵에 해당 차 번호가 없는데 IN부터 시작하는 경우 23:59에 출차된 차량, 이 경우 [누적 주차 시간(분)]으로 생성
// 1-2. 해시맵에 존재하는 차량 정보의 값을 저장하는 배열의 길이가 2 이상인 경우(출차 시간이 등록된 경우)에 누적 시간을 계산하여 갱신
// 2. 해시맵을 배열로 변경하고 차량 번호 순으로 정렬
// 3. 배열을 순회하며 주차요금을 계산해 answer에 입력
