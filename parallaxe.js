/**
 * Created by mehdi on 07/03/17.
 */

var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

function parallaxe(element,moveDegree){
    var X=parseFloat(element.style.left),Y=parseFloat(element.style.top); //X and Y are initial positions of the element

    document.addEventListener('mousemove',function(e){

        var posX=e.clientX-windowWidth/2,posY=e.clientY-windowHeight/2; //posX and posY are relative cursor position from window's center

        text.innerHTML="Window's width: "+windowWidth+"px, Window's height: "+windowHeight+"px<br/> Cursor position: x="+posX+", y="+posY;
        element.style.top=Y-posY/(10*moveDegree)+"px";
        element.style.left=X-posX/(10*moveDegree)+"px";

    },false);


}