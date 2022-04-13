let input = document.querySelector('input');

input.addEventListener('click', function(event) {
    event.target.style.outline = '0'

})
input.addEventListener('focus', function(event) {
    event.target.style.outline = '0';
})

let btn = document.querySelector('.inpicon')
btn.addEventListener('mouseon', (event) => {
    event.target.style.backgroundColor = 'red';
})


let list = document.querySelector('.list');

let btn = document.querySelector('.inpicon')

btn.addEventListener('click', (event) => {
    let input1 = document.createElement('input');
    input1.value = input.value
    list.append(input1);
    input.value = ''
})
