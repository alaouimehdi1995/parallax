function parallaxeElement(element,version) {
    var layers = container.getElementsByClassName("layer");

    for (var i = 0; i < layers.length; i++) {

        layers[i].style.position = i ? "absolute" : "relative"; //First Element will be relative, and all others absolute

        if (i) {

            layers[i].style.top =parseFloat(window.getComputedStyle(layers[0],null).top) + parseFloat(window.getComputedStyle(container,null).paddingTop) + "px";
            layers[i].style.left = parseFloat(window.getComputedStyle(layers[0],null).left) + parseFloat(window.getComputedStyle(container,null).paddingLeft) + "px";

        }

        var invert = layers[i].getAttribute("invert") === null ? false : (layers[i].getAttribute("invert") != "false");
        if(version==="desktop")
            parallaxe(layers[i], parseFloat(layers[i].getAttribute("degree")), invert);
        else
            mobileParallaxe(layers[i], parseFloat(layers[i].getAttribute("degree")), invert);

    }
}

function executeParallaxeOn(container) {

    parallaxeElement(container,"desktop");
}
function executeMobileParallaxeOn(container) {

    parallaxeElement(container,"mobile");
}