"use strict";

const TITLE = '::TITLE';
const RYTHM = '::RITME';



function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.response;
  }
  return result;
}



function writeLyrics(line)
{
    document.getElementById('song-display-lyrics').innerHTML += line + "<br>";
}

function writeTitle(title)
{
    document.getElementById('song-display-title').innerHTML += title;
}

function writeRythm(songName)
{
    document.getElementById('song-display-rythm').innerHTML += songName;
}




function unselectButtons()
{
    var buttons = document.getElementsByClassName('song-button');
    for(var index = 0; index < buttons.length; index ++)
    {
        buttons[index].style.backgroundColor = 'green';
        buttons[index].style.border = 'none 1px black';
        buttons[index].style.color = 'white';
    }
}

function selectButton(buttonId)
{
    console.log("Selected Button");
    document.getElementById(buttonId).style.backgroundColor = 'darkorange';
    document.getElementById(buttonId).style.border = 'solid 1px black';
    document.getElementById(buttonId).style.color = 'black';
}



function writeSong(title) 
{
    //Reset vars
    document.getElementById('song-display-lyrics').innerHTML = ""; //Song display canvas
    document.getElementById('song-display-title').innerHTML = "";
    document.getElementById('song-display-rythm').innerHTML = "";
    
    var fileText = loadFile("/songs/" + title + ".txt")
    var arrayText = fileText.split("\n");
    
    
    for (var index in arrayText)
    {
        var line = arrayText[index]
        if (line.includes(TITLE)) 
        {
            writeTitle(line.substr(TITLE.length));
        }
        else if (line.includes(RYTHM)) 
        {
            writeRythm(line.substr(RYTHM.length));
        }
        else 
        {
            writeLyrics(line);
        }   
    }
    unselectButtons();
    selectButton(title);
}
