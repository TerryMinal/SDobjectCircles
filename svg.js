var pic = document.getElementById("vimage");
var clearBtn = document.getElementById("clear")
var dots = [];

//clears the screen
var clearScreen = function(e){
    dots.forEach((a) => a.element.remove());
    dots = [];
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
    return {
        x : x,
        y : y,
        r : 15,
        fill : "red",
        element : cl,
        display : function() {
            cl.setAttribute("cx", this.x);
            cl.setAttribute("cy", this.y);
            cl.setAttribute("r", this.r);
            cl.setAttribute("fill", this.fill);
            cl.addEventListener('click', circle_clicked);
            pic.appendChild(cl);
        }
    };
}

//a blank space on svg container is clicked -- make circle
var svg_clicked = function(e){
    if (e.target == this){  //<-- toElement is undefined
        console.log("coords: ", e.offsetX, ", ", e.offsetY);
        var dot = makeDot(e.offsetX,e.offsetY);
        dots.push(dot);
        dot.display();
    };
}

clearBtn.addEventListener("click", clearScreen)
pic.addEventListener("click", svg_clicked)
