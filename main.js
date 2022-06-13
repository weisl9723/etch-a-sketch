let color = "black";

//allows click and hover to be used together
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const blackBtn = document.getElementById('blackBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const resetBtn = document.getElementById('resetBtn')

//blackBtn.addEventListener("click", () => {
//   changeColor("black")
//});

blackBtn.onclick = () => changeColor("black");
rainbowBtn.onclick = () => changeColor("rainbow");
eraserBtn.onclick = () => changeColor("white");
resetBtn.onclick = () => resetGrid();

function createGrid(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr`;

    for (let i = 0; i < size * size; i++){
        let box = document.createElement("div");
        box.addEventListener('mousedown', paintGrid);
        box.addEventListener('mouseover', paintGrid);
        board.appendChild(box);
    }
}

function changeSize(userInput){
    if (userInput >= 1 && userInput <= 64){
        createGrid(userInput);
        resetGrid();
    }
    else{
        return;
    }
}

function paintGrid(e){
    if (e.type === "mouseover" && !mouseDown)
    return;
    if (color === 'rainbow'){
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    else{
        this.style.backgroundColor = color;
    }
}

function changeColor(selection){
    blackBtn.classList.remove('active')
    rainbowBtn.classList.remove('active')
    eraserBtn.classList.remove('active')

    if (selection === "black"){
        blackBtn.classList.add('active')
    }
    else if (selection === "rainbow"){
        rainbowBtn.classList.add('active')
    }
    else if (selection === "white"){
        eraserBtn.classList.add('active')
    }

    color = selection;
}

function resetGrid(){
    let board = document.querySelector(".board");
    let box = board.querySelectorAll("div");
    box.forEach((div) => div.style.backgroundColor = "white");
}

createGrid(16);

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${slider.value} x ${slider.value}`;
  changeSize(this.value);
}