"use strict";

var obertPetits = false;
var obertMitjans = false;
var obertGrans =  false;
var obertK0 = false;
var obertK1 = false;
var obertK2 = false;
var obertRuta = false;


function showPetits() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertPetits) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'block';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        grup[6].style.display = 'none';
        
        obertPetits = true;
        
    }
};

function showMitjans() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertMitjans) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'block';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        grup[6].style.display = 'none';
        
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
        grup[2].style.display = 'block';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        grup[6].style.display = 'none';
        
        obertGrans = true;
        
    }
};

function showK0() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertK0) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'block';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        grup[6].style.display = 'none';
        
        obertK0 = true;
        
    }
};

function showK1() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertK1) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'block';
        grup[5].style.display = 'none';
        grup[6].style.display = 'none';
        
        obertK1 = true;
        
    }
};

function showK2() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertK2) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'block';
        grup[6].style.display = 'none';
        
        obertK2 = true;
        
    }
};

function showRuta() {
    
    var grup = document.getElementsByClassName('grup');
    
    if (obertRuta) {
        
        hideAll();
        
    } else {
        
        grup[0].style.display = 'none';
        grup[1].style.display = 'none';
        grup[2].style.display = 'none';
        grup[3].style.display = 'none';
        grup[4].style.display = 'none';
        grup[5].style.display = 'none';
        grup[6].style.display = 'block';
        
        obertRuta = true;
        
    }
};

function hideAll() {
    document.getElementsByClassName('grup')[0].style.display = 'none';
    document.getElementsByClassName('grup')[1].style.display = 'none';
    document.getElementsByClassName('grup')[2].style.display = 'none';
    document.getElementsByClassName('grup')[3].style.display = 'none';
    document.getElementsByClassName('grup')[4].style.display = 'none';
    document.getElementsByClassName('grup')[5].style.display = 'none';
    document.getElementsByClassName('grup')[6].style.display = 'none';
    
    obertPetits = false;
    obertMitjans = false;
    obertGrans = false;
    obertK0 = false;
    obertK1 = false;
    obertK2 = false;
    obertRuta = false;
    
    
};