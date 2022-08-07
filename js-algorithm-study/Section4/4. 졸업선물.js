function solution(m, product) {
  let answer = 0;
  let n = product.length; // 학생 수

  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); // 정렬

  for (let i = 0; i < n; i++) {
    // i 번째 상품을 할인
    let money = m - (product[i][0] / 2 + product[i][1]); // 할인받은 상품 구매
    let cnt = 1; // 구매한 상품 개수
    for (let j = 0; j < n; j++) {
      // 할인된 상품은 더 구매 불가 && 남은 예산으로 상품 구매 불가 -> 종료 조건
      if (j !== i && product[j][0] + product[j][1] > money) break;
      // 할인된 상품은 더 구매 불가 && 남은 예산으로 상품 구매 가능
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= (product[j][0] + product[j][1]);
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

// 1. product를 낮은 가격순으로 정렬
// 2. 각 상품마다 쿠폰을 적용해보며 예산으로 상품을 몇 개까지 살 수 있는지 확인

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));

//! 해설
// function solution(m, product) {
//     let answer = 0;
//     let n = product.length;
//     product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//     for (let i = 0; i < n; i++) {
//       let money = m - (product[i][0] / 2 + product[i][1]);
//       let cnt = 1;
//       for (let j = 0; j < n; j++) {
//         if (j !== i && product[j][0] + product[j][1] > money) break;
//         if (j !== i && product[j][0] + product[j][1] <= money) {
//           money -= product[j][0] + product[j][1];
//           cnt++;
//         }
//       }
//       answer = Math.max(answer, cnt);
//     }
//     return answer;
//   }

// my code
// function solution(m, product) {
//   let answer = 0;
//   let priceArr = [];
//   let tmp = []; // 쿠폰을 적용한 결과를 저장하는 임시 배열
//   let bestChoice = 0; // 몇 번째 학생의 선물을 할인하는 것이 좋은지 계산
//   let minPrice = Number.MAX_SAFE_INTEGER;

//   // 쿠폰을 적용했을 때 가장 저렴한 경우를 구함
//   for (let i = 0; i < product.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < product.length; j++) {
//       if (i === j) {
//         sum += product[j][0] / 2 + product[j][1];
//       } else {
//         sum += product[j][0] + product[j][1];
//       }
//     }
//     tmp.push(sum);
//     if (minPrice > sum) minPrice = sum;
//   }
//   bestChoice = tmp.indexOf(minPrice);

//   // 가장 저렴한 경우를 기준으로 상품 가격을 구함
//   for (let i = 0; i < product.length; i++) {
//     let price = 0;
//     if (i === bestChoice) {
//       price = product[i][0] / 2 + product[i][1];
//       priceArr.push(price);
//     } else {
//       price = product[i][0] + product[i][1];
//       priceArr.push(price);
//     }
//   }

//   priceArr.sort((a, b) => a - b);

//   // 상품을 몇 개 살 수 있는지 구함
//   for (let i = 0; i < priceArr.length; i++) {
//     if (m - priceArr[i] < 0) break;
//     m -= priceArr[i];
//     answer++;
//   }

//   return answer;
// }

// 상품 가격 + 배송비 = 선물 가격
// 상품 하나에 대해 50% 할인이 가능
// -> 상품은 저렴하지만 배송비가 매우 비싼 경우가 있을 수 있으므로 할인을 적용시킨 모든 경우에서 가장 저렴한 경우를 구하고 적용
// 오름차순을 한 뒤에 예산에서 선물 가격을 차감하며 counting
