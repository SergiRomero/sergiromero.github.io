var distance = 100;
var speed = 20;
var scrollY = 0;

function autoScrollById(elementId){
    
    var targetY = document.getElementById('song-display').offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var currentY = window.pageYOffset;
    var yPos = currentY + window.innerHeight;
    
    var animator = setTimeout("autoScrollById()", speed);
    
    if ((yPos < bodyHeight - 20) && (currentY < targetY - distance)){
        scrollY = currentY + distance;
        window.scroll(0, scrollY);
    } else {
        
    clearTimeout(animator);  
    }
    
}