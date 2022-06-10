let color = "black";

function createGrid(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr`;

    for (let i = 0; i < size * size; i++){
        let box = document.createElement("div");
        board.appendChild(box);
        box.addEventListener('mouseover', paintGrid);
    }
}

function paintGrid(){
    if (color === 'random'){
        this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }
    else{
        this.style.backgroundColor = color;
    }
}

function changeColor(choice){
    color = choice;
}

createGrid(16);