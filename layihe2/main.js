let addbtn = document.querySelector('.duyme');
let text = document.querySelector('input');
let list = document.querySelector('.list')
list.style.display = 'none'
let deletebtn = document.querySelector('.noyes');
let azalart = document.querySelector('.azalart')

function addlistitem() {
    list.innerHTML += `<div class="newinput"> 
    <input class="text" type="text" name="" id="" value="${text.value}">
    <button class="noyes"></button>
</div>`;
    text.value = '';

    let deletebtnnew = document.querySelectorAll('.noyes');
    deletebtnnew.forEach(el => {
        el.addEventListener('click', deletefunc)

        function deletefunc(event) {
            event.target.parentElement.remove()
        }
    })
    list.style.display = 'block'
}

addbtn.addEventListener('click', addlistitem)

let allist1 = document.querySelectorAll('.text');

//////////////SORT
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

    let allist = document.querySelectorAll('.text');
    allist.forEach(el => arr.push(el.value))
    console.log(arr);
    list.innerHTML = '';
    arr.pop();

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
            element += `<div class="newinput"> 
            <input class="text" type="text" name="" id="" value="${c}">
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
            element += `<div class="newinput"> 
            <input class="text" type="text" name="" id="" value="${c}">
            <button class="noyes"></button>
        </div>`;
        });
        list.innerHTML = element
        console.log(arr);
    }
}
////Mouseover-mouseout

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