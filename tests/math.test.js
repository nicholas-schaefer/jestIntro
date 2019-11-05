const {sum, subtract} = require('../math');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// test ('adds 3 + 5 to equal 9', ()=> {
//   expect(sum(3,5)).toBe(9);
// });

test ('adds 3 + 5 to equal 8', ()=> {
    expect(sum(3,5)).toBe(8);
  });

test ('subtracts 5 - 3 to equal 2', ()=> {
    expect(subtract(5,3)).toBe(2);
});

// test ('object assignment', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2})
// });

test ('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2})
});

test('not to be', () => {
  expect(subtract(5,2)).not.toBe(7);
});

// test('adding positive numbers is not zero', () => {
//   for (let a = 1; a < 10; a++) {
//     for (let b = 1; b < 10; b++) {
//       expect(a + b).not.toBe(0);
//     }
//   }
// });

// test('number not = to 7', () => {
//   for (let a = 1; a < 10; a++) {
//       expect(a).not.toBe(7);
//   }
// });

test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});



test ('array containing test "3"', () => {
  const newArray = Array.from(('32141567')).map(Number)
  newArray.unshift(sum(22,20));
  newArray.sort(function(a, b){return a-b});
  // const newArray = Array.from(('1234567')).map(val => parseInt(val,10));
  expect(newArray).toEqual([1, 1, 2, 3, 4, 5, 6, 7, 42]);
});