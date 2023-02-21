var menu = document.querySelector('.fa-bars');

var list = document.querySelector('#menu-list');

menu.addEventListener('click', function(){
    list.classList.toggle('active');

    document.addEventListener('click', function(e){
        if(!e.composedPath().includes(menu) && !e.composedPath().includes(list)){
            list.classList.remove('active');
        }
    })
})