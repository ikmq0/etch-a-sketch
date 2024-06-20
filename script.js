const container = document.getElementById("container");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createCells(gridSize) { 
  // Create grid cells
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${100 / gridSize}%`;
    cell.style.height = `${100 / gridSize}%`;
    cell.addEventListener('mouseover', changeColor)
    cell.addEventListener('mousedown', changeColor)
    container.appendChild(cell);
  } 
} 

function removeCells() { 
  for(const cell of container.querySelectorAll('.cell')) { 
    container.removeChild(cell);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const gridSize = 32; // Change this value for a larger or smaller grid
  createCells(gridSize);
});

function changeColor(e) { 
  if(e.type === 'mouseover' & !mouseDown) return;
  e.target.style.backgroundColor = 'black';

}


function ChangeSize(){
  const newSize = prompt("Enter the number of squares per side (100 is Maximum): ")
  if (newSize === null) {
    return; //break out of the function early
  }
  while(!(newSize < 100 && newSize >= 1)) { 
    newSize = prompt("Check your input!! \nEnter the number of squares per side (100 is Maximum): ")
  }
  // Complete Change Size Function
  removeCells();
  createCells(newSize);
}
