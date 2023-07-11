$('button').on('click', ()=>{
    const newitem = $('<div>');
    newitem.attr('class', 'item');

    let str = `
    <div class="section-1">
        <input type="checkbox" class="checkbox">
        <li class="text">${$('.input').val()}</li>
    </div>
    <div class="section-2">
        <span class="up">⬆️</span>
        <span class="bin">🗑️</span>
        <span class="down">⬇️</span>
    </div>`

    newitem.html(str);
    $('input').val("");
    $('.item-list').append(newitem);
})

$('.item-list').on('click', function(e){
    
    const element = $(e.target).attr('class');

    if(element === 'up'){
        $(e.target).parent().parent().prev().before($(e.target).parent().parent());
    }

    else if(element === 'bin'){
        $(e.target).parent().parent().remove();
    }

    else if(element ==='down'){
        // $(e.target).parent().parent().prev().after($(e.target).parent().parent());
        const curritem = e.target.parentElement.parentElement;
        const nextitem = curritem.nextElementSibling;
        nextitem.after(curritem);
    }

    else if(element === 'checkbox'){
        $(e.target).next().toggleClass('checkbox');
    }
})