// window.alert('1');
// const name = window.prompt('Как тебя зовут?');
// window.confirm(name + '?');

const heading = document.getElementById('hello');
// const heading2 = document.getElementsByTagName('h2')[0];
// const heading2 = document.getElementsByClassName('h2-class')[0];
// const heading2 = document.querySelector('.h2-class');
// const heading2 = document.querySelector('#sub-hello'); // Возвращает всегда 1 элемент
const heading2 = document.querySelector('h2');

// console.dir(heading2);

// const heading3 = heading2.nextElementSibling;
const h2List = document.querySelectorAll('h2');
// console.log(h2List);
const heading3 = h2List[h2List.length - 1];
// console.log(heading3);

// console.dir(heading.textContent);

setTimeout(() => {
    addStylesTo(heading, 'JavaScript', 'black');
}, 2000);

setTimeout(() => {
    addStylesTo(heading2, 'И все получится!', 'yellow', fontSize = '2rem');
}, 2500);

const link = heading3.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('click on link', event.target.getAttribute('href'));
    const url = event.target.getAttribute('href');

    window.open(url);
    // window.location = url;
});

setTimeout(() => {
    addStylesTo(link, 'Практикуйся');
}, 3000);

function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = 'center';
    node.style.backgroundColor = 'blue';
    node.style.padding = '3rem';
    node.style.display = 'block';
    node.style.whidth = '100%';
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize;
    }
}


// https://developer.mozilla.org/ru/docs/web/events

heading.onclick = () => {
    if (heading.style.color === 'black') {
        heading.style.color = '#000';
        heading.style.backgroundColor = '#fff';
    } else {
        heading.style.color = 'black';
        heading.style.backgroundColor = '#000';
    }
};

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000';
        heading2.style.backgroundColor = '#fff';
    } else {
        heading2.style.color = 'yellow';
        heading2.style.backgroundColor = '#000';
    }
});