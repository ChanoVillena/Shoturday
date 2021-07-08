const menuz = document.querySelector('#menuz');
const barsmenuz = document.querySelector('#barsmenuz');

menuz.addEventListener('click', function(){
    console.log('click menuz');

    if(menuz.classList.contains('open')){
        menuz.classList.remove('open');
        barsmenuz.classList.add('opens'); 
    }
    else {
        menuz.classList.add('open');
        barsmenuz.classList.remove('opens');
        
    }
});