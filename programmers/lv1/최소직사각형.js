function solution(sizes) {
  let maxWidth = 0, maxHeight = 0;

  sizes.forEach((el) => {
    let width = el[0], height = el[1];
    if (width < height) [height, width] = [width, height];

    if (maxHeight < height) maxHeight = height;
    if (maxWidth < width) maxWidth = width;
  });

  return maxWidth * maxHeight;
}
// sizes는 [w, h] 형식의 2차원 배열
// 필요할 시 각 요소를 가로 길이가 더 길게 정렬하고, 가장 큰 w, h를 구하여 곱한 뒤 리턴

let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
let result = solution(sizes);
console.log(result);