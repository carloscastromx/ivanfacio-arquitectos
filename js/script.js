window.onload=function(){

    const togglebtn = document.getElementsByClassName('toggle-menu')[0];
    const cerrarbtn = document.getElementsByClassName('toggle-cerrar')[0];
    const menunav = document.querySelector('nav.menu');

    togglebtn.addEventListener('click', () => {
        menunav.classList.toggle('active');
    });

    cerrarbtn.addEventListener('click', () => {
        menunav.classList.toggle('active');
    });

}