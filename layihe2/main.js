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
let noyespic = document.querySelector('.noyespic');
let noyes2 = noyes;

//6 4 9 6 14 ?-2+3-3+8-4

input.addEventListener('blur', () => {
    var deletebutton = document.createElement('button');
    var pic = document.createElement('img');;
    pic.src = "images/nodelete.png";
    var dv = document.createElement('div');
    var input1 = document.createElement('input');
    deletebutton.append(pic)
    deletebutton.style.backgroundColor = "white";
    deletebutton.style.border = '0';
    deletebutton.style.marginLeft = '8px'
    input1.value = input.value;
    dv.append(input1);
    dv.append(deletebutton)
    list.append(dv);
    inp2.style.display = 'none';
    deletebutton.classList.add('dltbtn');
    input1.classList.add('listitem')
    deletebutton.addEventListener('mouseover', () => {
        pic.src = "images/yesdelete.png";
    })
    deletebutton.addEventListener('mouseout', () => {
        pic.src = "images/nodelete.png";
    })
    deletebutton.addEventListener('click', () => {
        dv.remove()
    })

})
let count = 0;
let azalanartan = document.querySelector('.azalanartan');


azalanartan.addEventListener('mouseover', (event) => {
    event.target.src = "images/yesazalan.png";
})
azalanartan.addEventListener('click', (event) => {
    event.target.src = "images/noartan.png";
})
azalanartan.addEventListener('mouseover', (event) => {
    event.target.src = "images/yesartan.png";
})
azalanartan.addEventListener('click', (event) => {
        event.target.src = "images/noazalan.png";
    })
    // noyes.addEventListener('mouseover', () => {
    //     noyespic.src = "images/yesdelete.png";
    // })

// noyes.addEventListener('mouseout', () => {
//     noyespic.src = "images/nodelete.png";
// })

// noyes.addEventListener('click', () => {
//     input.value = ''
// })

btn.addEventListener('click', () => {
    input.value = ''
    inp2.style.display = 'block';
})