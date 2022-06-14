const arr = new Array(100);

for (i = 0; i < arr.length; i++) {
  arr[i] = i + 1;
}

arr.forEach((item) => {
  if (item % 5 == 0 && item % 3 == 0) {
    arr[item - 1] = 'fooBar';
  } else if (item % 3 == 0) {
    arr[item - 1] = 'foo';
  } else if (item % 5 == 0) {
    arr[item - 1] = 'bar';
  }
});
console.log(arr);

/*
right solution
const arr = [...Array(100)].map((_, i) => i + 1);
const res = arr.map(n => `${n % 3 ? '' : 'Foo'}${n % 5 ? '' : 'Bar'}` || n);

console.log(res);
*/

/*
add
const a = +prompt('firs num', ''),
      b = +prompt('second num', ''),
      c = +prompt('third num', '')

const arr = [...Array(100)].map((item, i) => ++i);
const res = arr.map(n => `${n % a ? '' : 'foo'}${n % b ? '' : 'Bar'}${n % c ? '' : 'Plus'}` || n);

alert(res);
*/
