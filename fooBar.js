/*
My solution
let arr = new Array(100);

for(i=0; i<arr.length; i++) {
    arr[i] = i;
}

// console.log(arr);

arr.forEach((item) => {
    if(item % 3 == 0 && item % 5 == 0) {
        console.log(`${item}: foobar`);
    } else if(item % 5 == 0){
        console.log(`${item}: bar`);
    } else if(item % 3 == 0){
        console.log(`${item}: foo`);
    }
});
*/

/*
right solution
const arr = [...Array(100)].map((_, i) => i + 1);
const res = arr.map(n => `${n % 3 ? '' : 'Foo'}${n % 5 ? '' : 'Bar'}` || n);

console.log(res);
*/