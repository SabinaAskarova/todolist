let input = document.querySelector('input');

input.addEventListener('click', function(event) {
    event.target.style.outline = '0'

})
input.addEventListener('focus', function(event) {
    event.target.style.outline = '0';
})


let list = document.querySelector('.list');
let inp2 = document.querySelector('.input')
let btn = document.querySelector('.duyme')
let noyes = document.querySelector('.noyes');
let firstinput = document.querySelector('.firstinput');
firstinput.addEventListener('blur', _ => {
    firstinput.setAttribute("value", firstinput.value);
})

function addlistitem() {
    list.innerHTML += `<div class="input">
    <input type="text" name="" id="">
    <button class="noyes"></button>
</div>`;

    let deletebtnnew = document.querySelectorAll('.noyes');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })

    let inputs = document.querySelectorAll('input');
    inputs.forEach(el => {
        el.style.outline = '0'
        el.addEventListener('blur', _ => {
            el.setAttribute("value", el.value);
        })
    })
}

btn.addEventListener('click', addlistitem);


// SORT
let arr = [];
let counter = 0;

let sortbtn = document.querySelector('.sortbtn');
sortbtn.addEventListener('click', sorter);
sortbtn.addEventListener('click', demo);

function demo() {
    let deletebtnnew = document.querySelectorAll('.noyes');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })
}

function sorter() {

    let allist = document.querySelectorAll('input');
    allist.forEach(el => arr.push(el.value))
    console.log(arr);
    list.innerHTML = '';

    if (counter == 0) {
        domcreator(counter);
        counter++;
        azalart.src = "images/noartan.png"
    } else {
        domcreator(counter);
        counter--;
        azalart.src = "images/noazalan.png"
    }
    arr = [];
}

function domcreator(el) {
    if (el == 0) {
        let element = ''

        arr.sort(function(a, b) {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        });

        arr.map(c => {
            element += `<div class="input">
            <input type="text" name="" id="" value="${c}">
            <button class="noyes"></button>
        </div>`;

        });
        list.innerHTML = element
        console.log(arr);

    } else {
        let element = ''

        arr.sort(function(a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        });
        arr.map(c => {
            element += `<div class="input">
            <input type="text" name="" id="" value="${c}">
            <button class="noyes"></button>
        </div>`;

        });
        list.innerHTML = element
        console.log(arr);
    }
}
//Mouseover-mouseout
let azalart = document.querySelector('.azalart')
sortbtn.addEventListener('mouseover', _ => {
    var img = document.getElementById('sekil').getAttribute('src');
    if (img == "images/noartan.png") {
        azalart.src = 'images/yesartan.png'
    } else if (img == "images/noazalan.png") {
        azalart.src = 'images/yesazalan.png'
    }
})
sortbtn.addEventListener('mouseout', _ => {
    var img = document.getElementById('sekil').getAttribute('src');

    if (img == "images/yesartan.png") {
        azalart.src = 'images/noartan.png'

    } else if (img == "images/yesazalan.png") {
        azalart.src = 'images/noazalan.png'

    }
})