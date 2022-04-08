// function bind(lastName) {
//     let firstName = 'Yakov';
//     let counter = 0;

//     function father(length) {

//         for (i = 0; i < length; i++) {
//             counter++;
//             console.log(counter + ' ' + firstName + ' ' + lastName);
//         }
//     }
//     return father;
// }
// let fullName = bind('Lemenkov');
// fullName(4);



function getSum(a) {
    return function (b) {
        console.log(a + b);
    };
}

getSum('14')('88');