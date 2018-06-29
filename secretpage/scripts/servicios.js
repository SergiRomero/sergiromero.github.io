"use strict";

var textos =["<h3>Derecho de Familia</h3><ul><li>Separacion y divorcio</li> <li>Modificacion de sentencias</li><li>Parejas de hecho</li><li>Guarda y custodia de los hijos</li><li>Pensión de alimentos</li><li>Pension compensatoria</li><li>Liquidación de bienes familiares</li><li>Redacción de convenio regulador</li><li>Tutela e incapacitaciones</li></ul>",
             
            "<h3>Derecho de Extrangeria</h3><ul><li>Expulsiones</li><li>Tarjetas de residencia por agrupación o por arriago</li><li>Reagrupamiento</li><li>Tramitación residencial y nacionalidades</li></ul>",
             
            "<h3>Derecho de Civil</h3><ul><li>Redacción de contratos de arrendamiento</li><li>Arrendamientos y deshaucios</li><li>Reclamaciones de cantidad</li><li>Ejecuciones hipotecarias</li><li>Responsabilidad civil</li><li>Redacción de demandas</li><li>Asistencia letrada a los juzgados</li><li>Ejecución de sentencias</li><li>Clausula suelo</li></ul>",
             
            "<h3>Derecho de Penal</h3><ul><li>Alcoholemias</li><li>Lesiones, amenazas, violencia de genero</li><li>Robo, hurto, estafa</li><li>Impago de pensiones alimentos</li><li>Tráfico de drogas y otros delitos</li><li>Asistencia letrada en comisaría, Juzgado, Físcalia, Centros penitenciarios y Centro de Menores</li><li>Redacción de denuncias, querella y recursos</li><li>Ejercicio de la defensa i la acusación en los procedimientos penales</li><li>Cancelación de antecedentes penales</li></ul>",
             
            "<h3>Accidentesd e Trafico</h3><ul><li>Asesoramiento pare reclamar indemnización de daños materiales y corporales</li><li>Calculo de la indemnización correspondiente</li><li>Negociación con la compañia</li><li>Redacción de denuncia penal</li><li>Redacción de demanda civil</li><li>Procesos Penales, Civiles o Extrajudiciales</li><li>Asistencia Letrada al Juzgado</li></ul>",
             
            "<h3>Sucesiones</h3><ul><li>Tramitación de plusvalia</li><li>Tramitación del impuesto de sucesiones</li><li>Herencias</li><li>Asesoramiento para redactar un testamento</li><li>Pactos sucesorios</li><li>Ligitaciones hereditarias</li></ul>",
            "<h3>Derecho Hipotecario</h3><ul><li>Expulsiones</li><li>Reagrupamiento</li></ul>",
             
            "<h3>Compliance</h3><ul><li>Análisis de los riesgos penales existentes en una empresa</li><li>Elaboración de un mapa de riesgos penales</li><li>Inventario de procedimientos y protocolos existentes en la empresa para evitar la comisión de delitos</li><li>Implementación de protocolos, procedimientos, medidas y control necesario para prevenir los delitos</li><li>Creación de un órgano de supervisión y control del modelo de prevención de riesgos penales</li><li>Creación de un sistema de denuncias</li><li>Revisión periódica y actualización del modelo de prevención de delitos</li></ul>"
            ];

var botons = document.getElementsByTagName("Button");
var img = document.getElementsByTagName("svg");

var distance = 40;
var speed = 24;
var scrollY = 0;

function changeText(i) {

    document.getElementById("info").innerHTML = textos[i];
    botons[i].style.color = "#FF6D41";
    botons[i].style.backgroundColor = "#1E1F21";
    img[i+1].style.fill = "#FF6D41";
    
    getColorBack(i);
    
};

function getColorBack(i) {
    
    for (var j = 0; j < textos.length; j ++){
        
        if (j != i) {
            botons[j].style.color = "black";
            botons[j].style.backgroundColor = "transparent";
            img[j+1].style.fill = "#1E1F21";
            
        }
    }
    
}

function autoScroll(){
    
    var targetY = document.getElementById("info").offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var currentY = window.pageYOffset;
    var yPos = currentY + window.innerHeight;
    
    var animator = setTimeout("autoScroll()", speed);
    
    if ((yPos < bodyHeight - 20) && (currentY < targetY - distance)){
        scrollY = currentY + distance;
        window.scroll(0, scrollY);
    } else {
        
    clearTimeout(animator);  
    }
    
}
