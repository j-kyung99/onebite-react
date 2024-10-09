// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];
arr1.forEach(function (item, idx, arr) {
  // console.log(idx, item * 2);
});

let doubleArr = [];

arr1.forEach((item) => {
  doubleArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 얕은 비교로만 진행하기 때문에 객체 값은 찾지 못함
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// 존재하지 않으면 -1 반환, 같은 값이 여러개 있을 경우 제일 앞 요소의 인덱스 반환

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 특정 요소의 인덱스(위치)를 반환하는 메서드
// 콜백함수를 이용하여 진행하기 때문에 복잡한 객체 값도 조건식만 잘 만들면 찾을 수 있음
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 999);

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "갱" }, { name: "핑" }];
const finded = arr5.find((item) => item.name === "갱");
