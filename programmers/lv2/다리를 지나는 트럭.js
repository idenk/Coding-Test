function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);

  let count = 0;
  let currentWeight = 0;

  do {
    currentWeight -= queue.shift();

    if (currentWeight + truck_weights[0] <= weight) {
      let nextTruck = truck_weights.shift();
      currentWeight += nextTruck;
      queue.push(nextTruck);
    } else {
      queue.push(0);
    }
    count++;
  } while (currentWeight > 0);

  return count;
}
