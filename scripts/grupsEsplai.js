"use strict";

var obertMinis = false;
var obertPetits = false;
var obertMitjans = false;
var obertGrans = false;
var obertJoves1 = false;
var obertJoves2 = false;


function showMinis() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertMinis) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'block';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
        obertMinis = true;
        
    }
};

function showPetits() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertPetits) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'block';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
        obertPetits = true;
        
    }
};

function showMitjans() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertMitjans) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'block';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
        obertMitjans = true;
        
    }
};

function showGrans() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertGrans) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'block';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        
        obertGrans = true;
        
    }
};

function showJoves1() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertJoves1) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'block';
        grup[5].style.display = 'none';
        
        obertJoves1 = true;
        
    }
};

function showJoves2() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertJoves2) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'block';
        
        obertJoves2 = true;
        
    }
};

function hideAll() {
    document.getElementsByClassName('grup')[0].style.display = 'none';
    document.getElementsByClassName('grup')[1].style.display = 'none';
    document.getElementsByClassName('grup')[2].style.display = 'none';
    document.getElementsByClassName('grup')[3].style.display = 'none';
    document.getElementsByClassName('grup')[4].style.display = 'none';
    document.getElementsByClassName('grup')[5].style.display = 'none';
    
    obertMinis = false;
    obertPetits = false;
    obertMitjans = false;
    obertGrans = false;
    obertJoves1 = false;
    obertJoves2 = false;
};