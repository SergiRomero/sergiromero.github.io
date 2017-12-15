"use strict";

var grup = document.getElementsByClassName('grup'); //Lista de grupos 
var button = document.getElementsByTagName('button'); //Lista de botones 

/**
 * Itera por todos los grupos actualizando su visibilidad y el tipo de letra del boton asociado
 * @param j, grupo que ha de quedar visible (ver tabla de relaciones en .html sobre el que se ejecuta)
 */
function showSelected(j) {

    for (var i = 0; i < grup.length; i ++){
        
        if (i == j) { 
        
            grup[i].style.display = 'block';
            button[i].style.fontWeight = 'bold';
            
        } else { 
            
            grup[i].style.display = 'none';
            button[i].style.fontWeight = 'initial'; 
        
        }
    }
    
};
