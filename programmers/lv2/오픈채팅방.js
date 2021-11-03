function solution(record) {
  const nameList = {};
  const stateList = [];

  record.forEach((el) => {
    const [state, id, name] = el.split(' ');
    if (state === 'Enter') {
      stateList.push([id, '님이 들어왔습니다.']);
    } else if (state === 'Leave') {
      stateList.push([id, '님이 나갔습니다.']);
    } 
    nameList[id] = name;
  });

  const answer = stateList.map((el) => `${nameList[el[0]]}${el[1]}`);

  return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
const result = solution(record);
console.log(result);