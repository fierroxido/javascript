/**
 * Practica de Javascript utilizando matrices
 */

 var matriz=[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//object.addEventListener("change", myScript);
window.onload=function(){
    document.getElementById('opciones').addEventListener('change',ejecutarOpcion);

};
function ejecutarOpcion(){
    let opcion = document.getElementById('opciones').value;
    borrarMatrizDerecha();
    switch (opcion) {
        case '1':
         mostrarMatriz();
            
            break;
        case '2':
            mostrarDiagonalPrincipal();

            break;
        case '3':
            mostrarDiagonalInversa();
            
           break;
        case '4':
            mostrarSuperiorDerecha();
            
            break;
        case '5':
            mostrarSuperiorIzquierda();
    
            break;
        case '6':
            mostrarInferiorIzquierdo();
                    
             break;
        case '7':
            mostrarInferiorDerecho();
    
            break;
        case '8':
            generarMatriz();
            mostrarMatriz();
              
            break;
    
        default:
            break;
    }
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function generarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            matriz[f][c]=generarAleatorio(10,100);
            
            
            
        }
        
        
    }

    
}
function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident='i-f'+f+'c'+c;
            //console.log(ident);
            document.getElementById(ident).innerText=matriz[f][c];
            
        }  
    }
}
function borrarMatrizDerecha() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident='d-f'+f+'c'+c;
            //console.log(ident);
            document.getElementById(ident).innerText='';
            
        }  
    }


    
}
function mostrarDiagonalPrincipal() {
    for (let f = 0; f < matriz.length; f++) {
        let ident='d-f'+f+'c'+f;
        document.getElementById(ident).innerText=matriz[f][f]
        
        
    }
    
}
function mostrarDiagonalInversa() {
    for (let f = 0; f < matriz.length; f++) {
        let c=(matriz.length-1)-f;
        let ident='d-f'+f+'c'+c;
        document.getElementById(ident).innerText=matriz[f][f]
        
        
    }
    
}

function mostrarSuperiorIzquierda() {

    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length-f; c++) {
        let ident='d-f'+f+'c'+c;
        document.getElementById(ident).innerText=matriz[f][c]
        
        }
    }
    
}

function mostrarSuperiorDerecha() {

    for (let f = 0; f < matriz.length; f++) {
        for (let c = f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
    
}
function mostrarInferiorDerecho() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 4-f; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
function mostrarInferiorIzquierdo() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c <= f; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c]
            //matriz[f][c]
        }
    }
}
/**
 * 
 * @param {int} min 
 * @param {int} max 
 *  
 */

function generarAleatorio(min,max) {
    let numero= Math.round(Math.random()*(max-min))+min;
    return numero;
}
generarMatriz();
















































































































































































































































































































