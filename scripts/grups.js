"use strict";
function showMinis() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (grup[0].style.display != 'none') {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'inline-block';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
    }
};

function showPetits() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (grup[1].style.display != 'none') {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'block';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
    }
};

function showMitjans() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (grup[2].style.display != 'none') {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'block';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
    }
};

function showGrans() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (grup[3].style.display != 'none') {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'block';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
    }
};

function showJoves1() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (grup[4].style.display != 'none') {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'block';
        grup[5].style.display = 'none';
        
    }
};

function showJoves2() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (grup[5].style.display != 'none') {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'block';
        
    }
};

function hideAll() {
    document.getElementsByClassName('grup')[0].style.display = 'none';
    document.getElementsByClassName('grup')[1].style.display = 'none';
    document.getElementsByClassName('grup')[2].style.display = 'none';
    document.getElementsByClassName('grup')[3].style.display = 'none';
    document.getElementsByClassName('grup')[4].style.display = 'none';
    document.getElementsByClassName('grup')[5].style.display = 'none';
};