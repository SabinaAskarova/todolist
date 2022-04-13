let input = document.querySelector('input');

input.addEventListener('click', function(event) {
    event.target.style.outline = '0'

})
input.addEventListener('focus', function(event) {
    event.target.style.outline = '0';
})


let list = document.querySelector('.list');
let inp2 = document.querySelector('.input')
let btn = document.querySelector('.inpicon')
let noyes = document.querySelector('.noyes');
let noyes2 = noyes
input.addEventListener('blur', (event) => {
    let input1 = document.createElement('input');
    let button = document.createElement('button');
    let pic = document.createElement('img');
    pic.src = "images/nodelete.png";
    button.append(pic)
    input1.value = input.value
    list.append(input1);
    list.append(button)
    inp2.style.display = 'none';
})

btn.addEventListener('click', () => {
    input.value = ''
    inp2.style.display = 'block';

})
