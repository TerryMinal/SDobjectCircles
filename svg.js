var pic = document.getElementById("vimage");
var clearBtn = document.getElementById("clear")
var dots = [];

//clears the screen
var clearScreen = function(e){
    dots.forEach((a) => a.element.remove());
    console.log("Cleared Screen.")
}

//a circle has been clicked -- two paths: Change or Die
var circle_clicked = function(e){
    if (this.getAttribute('fill') == 'green') {
        this.setAttribute('fill', 'red');
        this.setAttribute('cx', Math.random() * 485 + 15);
        this.setAttribute('cy', Math.random() * 485 + 15);
    } else {
        this.setAttribute('fill', 'green');
    }
}

var makeDot = function(x, y) {
    var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "15");
    cl.setAttribute("fill", "red");
    pic.appendChild(cl);
    cl.addEventListener('click', circle_clicked);
    return {
        x : x,
        y : y,
        fill : "red",
        stroke : "red",
        element : cl
    };
}

//a blank space on svg container is clicked -- make circle
var svg_clicked = function(e){
    if (e.target == this){  //<-- toElement is undefined
        console.log("coords: ", e.offsetX, ", ", e.offsetY);
        dots.push(makeDot(e.offsetX,e.offsetY));
    };
}

clearBtn.addEventListener("click", clearScreen)
pic.addEventListener("click", svg_clicked)
