"use strict";

var grup = document.getElementsByClassName('grup');
var button = document.getElementsByTagName('button');


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
