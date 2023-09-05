var slide = document.querySelector(".projetos .slides");
var inputs = [...document.querySelectorAll(".projetos .btn-manual")];
var labels = [...document.querySelectorAll(".projetos .label-manual")];

var inputs2 = [...document.querySelectorAll(".galeria .btn-manual")];
var labels2 = [...document.querySelectorAll(".galeria .label-manual")];

var textos = [...document.querySelectorAll('.projetos p')];

var contador = 0;
var contador2 = 0;
var percentil = -100;


labels.forEach(e=>{
    e.addEventListener('click', trocar)
})

// labels2.forEach(e=>{
//     e.addEventListener('click', ()=>{
//         inputs[contador2].checked = true;
//         contador2++;
//         if( contador2 = 2 ) contador2 = 0
//     })
// })

function trocar (){
    let titulo = document.querySelector('.projetos h4');
    
    inputs[contador].checked = true;
    switch(contador){
        case 0:
        textos[0].style.opacity = 1;
        textos[1].style.opacity = 0;
        titulo.innerText = 'Projeto 3D'
        break
        case 1:
        textos[0].style.opacity = 0;
        textos[1].style.opacity = 1;
        titulo.innerText = 'Projeto 2D';
        break
    }
    contador++;
    if(contador ==2 ) contador = 0
}


var interval1 = setInterval(()=>{
    // contador++;
    // if(contador ==2 ) contador = 0
    trocar();
}, 10000)

var interval2 = setInterval(() =>{
    inputs2[contador2].checked = true;
    contador2++;
    if( contador2 == 4 ) contador2 = 0
},3000)





