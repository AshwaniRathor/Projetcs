const input = document.querySelector('.input');
const button = document.querySelector('.button');
const tasklist = document.querySelector('.item-list');
button.addEventListener('click',(e)=>{
    // console.log(input.value);
    const newitem = document.createElement('div');
    newitem.setAttribute('class', 'item');

    let str = `<div class="section-1">
                    <input type="checkbox" class="checkbox">
                    <li class="text">${input.value}</li>
                </div>
                <div class="section-2">
                    <span class="up">⬆️</span>
                    <span class="bin">🗑️</span>
                    <span class="down">⬇️</span>
                </div>`
    newitem.innerHTML = str;
    tasklist.append(newitem);

    input.value="";
})


tasklist.addEventListener('click', (e)=>{
    const element = e.target.getAttribute('class');
    console.log(element);

    if(element === 'bin'){
        const item = e.target.parentElement.parentElement;
        item.remove();
    }

    else if(element === 'up'){
        const curritem = e.target.parentElement.parentElement;
        const previtem = curritem.previousElementSibling;
        previtem.before(curritem);
    }

    else if(element === 'down'){
        const curritem = e.target.parentElement.parentElement;
        const nextitem = curritem.nextElementSibling;
        nextitem.after(curritem);
    }
    else if (element === 'checkbox'){
        const textitem = e.target.nextElementSibling;
        console.log(textitem);
        textitem.classList.toggle('checkbox');
    }
})