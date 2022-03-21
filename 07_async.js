// Event Loop

// const timout = setTimeout(() => {
//     console.log('After timeout');
// }, 3000);

// clearTimeout(timout);

// const interval = setInterval(() => {
//    console.log('After timeout'); 
// }, 1000);

// clearInterval(interval);

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait);
// };

// delay(() => {
//     console.log('After 4 seconds');
// }, 4000);

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            reject('Ой! Кажется, что-то пошло не так попробуй позже!');
        }, wait);
    }, );
    return promise;
};

// delay(2000)
//     .then(() => {
//         console.log('After 2 seconds');
//     })
//     .catch(err => console.error('Error:', err))
//     .finally(() => console.log('Finally'));

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]));

// getData().then(data => console.log(data));

async function asyncExample() {
    try {
        await delay(3000);
        const data = await getData();
        console.log('Data', data);
    } catch(e) {
        console.error(e);
    } finally {
        console.log('Finally');
    }
}

asyncExample();