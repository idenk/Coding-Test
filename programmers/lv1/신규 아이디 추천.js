function solution(new_id) {
  let result;
  result = new_id
    .toLowerCase()
    .replace(/[^0-9a-zA-Z-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '');
  
  if (result === "") result = "a";

  if (result.length >= 16) {
    result = result.slice(0, 15).replace(/\.$/g, '');
  };

  if (result.length <= 2) {
    while (result.length < 3) {
      result += result[result.length - 1].repeat(1);
    }
  }

  return result;
}

const id = 'abcdefghijklmn.p';
solution(id);
