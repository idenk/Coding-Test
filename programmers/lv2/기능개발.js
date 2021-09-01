function solution(progresses, speeds) {
  const answer = [];
  const progressingDays = [];

  for (let i = 0; i < progresses.length; i++) {
    let count = 0;
    let currentProcess = progresses[i];
    while (currentProcess < 100) {
      currentProcess += speeds[i];
      count++;
    }
    progressingDays.push(count);
    count = 0;
  }

  while (progressingDays.length > 0) {
    let count = 0;
    let fisrtProgress = progressingDays[0];
    while (fisrtProgress >= progressingDays[0]) {
      progressingDays.shift();
      count++;
    }
    answer.push(count);
    count = 0;
  }
  return answer;
}
