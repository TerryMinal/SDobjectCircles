var pic = document.getElementById("vimage");
var clearBtn = document.getElementById("clearBtn")
var dots = [];

//clears the screen
var clearScreen = function(e){
    pic.innerHTML = "";
    console.log("Cleared Screen.")
}

//a circle has been clicked -- two paths: Change or Die
var circle_clicked = function(e){
    if (this.getAttribute('fill') == 'red') {
        this.setAttribute('fill', 'green');
        this.setAttribute('cx', Math.random() * 485 + 15);
        this.setAttribute('cy', Math.random() * 485 + 15);
    } else {
        this.setAttribute('fill', 'red');
    }
}

//draws a circle at the specified location
var drawDot = function(x,y){
    var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", "15");
    cl.setAttribute("fill", "green");
    pic.appendChild(cl);
    //add event listener to circle
    cl.addEventListener('click', circle_clicked);
    return
}

//a blank space on svg container is clicked -- make circle
var svg_clicked = function(e){
    console.log(e.target);
    console.log(this);
    console.log(e.target == this);
    if (e.target == this){  //<-- toElement is undefined
        console.log("coords: ", e.offsetX, ", ", e.offsetY);
        drawDot(e.offsetX,e.offsetY);
    };
}

clearBtn.addEventListener("click", clearScreen)
pic.addEventListener("click", svg_clicked)
