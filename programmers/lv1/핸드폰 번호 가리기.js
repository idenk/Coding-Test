function solution(phone_number) {
  let lastNum = phone_number.slice(-4);
  let starStr = '*'.repeat(phone_number.length - 4);

  let answer = starStr + lastNum;

  return answer;
}
