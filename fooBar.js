let arr = new Array(100);

for(i=0; i<arr.length; i++) {
    arr[i] = i;
};

// console.log(arr);

arr.forEach((item) => {
    if(item % 3 == 0 && item % 5 == 0) {
        console.log(`${item}: foobar`);
    } else if(item % 5 == 0){
        console.log(`${item}: bar`);
    } else if(item % 3 == 0){
        console.log(`${item}: foo`);
    }

    // let x;
    // switch(0) {
    //     case item % 3 && item % 5:
    //         console.log(`${item} foobar`);
    //         break;
    //     case item % 3:
    //         console.log(`${item} foo`);
    //         break;
    //     case item % 5:
    //         console.log(`${item} bar`);
    //         break;
    //     default:
    //         console.log(`${item} не делиться ни на 3, ни на 5`);
    //         break;
    // }
});
