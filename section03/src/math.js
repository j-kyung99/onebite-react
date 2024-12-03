// math 모듈

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
} // default 설정 시 math 모듈을 대표하는 단 하나의 기본값이 됨

//export { add, sub };
// module.exports = {
//   add,
//   sub,
// };
