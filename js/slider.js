window.onload=function(){

    const slides = [...document.querySelectorAll('.miembro-equipo')];
    const flechaPrev = document.querySelector('#anterior');
    const flechaNext = document.querySelector('#siguiente');
    let valor;

    flechaPrev.addEventListener('click',()=>cambiarPosicion(-1));
    flechaNext.addEventListener('click',()=>cambiarPosicion(1));

    function cambiarPosicion(cambio){
        //ID del último div visible (por default el ultimo div es el 2)
        const actual = Number(document.querySelectorAll('.miembro--show')[1].dataset.id);
        valor = actual;

        //Si se da back cuando se muestra el primer elemento, omitir
        if(cambio === -1 && valor === 2){
            return;
        }

        //Si se da next cuando se muestra el último elemento, omitir
        if(cambio === 1 && valor === 4){
            return;
        }

        let x = valor;

        //Boton Siguiente
        if(cambio === 1){
            //Ocultar a la persona en columna 1 
            document.querySelector('[data-id="'+(x-1)+'"').classList.toggle('miembro--show');
            document.querySelector('[data-id="'+(x-1)+'"').style.gridColumn = null;
            //Reacomodar al actual en la primera columna
            document.querySelector('[data-id="'+x+'"').style.gridColumn = 1;
            //Mostrar al siguiente en columna 2
            document.querySelector('[data-id="'+(x+1)+'"').classList.toggle('miembro--show');
            document.querySelector('[data-id="'+(x+1)+'"').style.gridColumn = 2;
        }

        //Boton Anterior
        if(cambio === -1){
            //Ocultar al actual (en la columna 2)
            document.querySelector('[data-id="'+x+'"').classList.toggle('miembro--show');
            document.querySelector('[data-id="'+x+'"').style.gridColumn = null;
            //Reacomodar al de la columna 1 a la 2
            document.querySelector('[data-id="'+(x-1)+'"').style.gridColumn = 2;
            //Mostrar al elemento anterior en columna 1
            document.querySelector('[data-id="'+(x-2)+'"').classList.toggle('miembro--show');
            document.querySelector('[data-id="'+(x-2)+'"').style.gridColumn = 1;
        }

    }

}