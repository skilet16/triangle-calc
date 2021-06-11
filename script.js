function isNumber(value) {
  if(/^\d+$/.test(value)) {
    return true
  } else {
    return false
  }
}

function drawTriangle(triangleType) {
  let triangle = document.querySelector("#triangle-draw");
  triangle.className = triangleType;
}

function outputText(message) {
   document.querySelector("#calc-output").innerHTML = message;
}

function calcTriangle() {
  let inputA = document.querySelector('input[name="sideA"]').value;
  let inputB = document.querySelector('input[name="sideB"]').value;
  let inputC = document.querySelector('input[name="sideC"]').value;

  if(isNumber(inputA) && isNumber(inputB) && isNumber(inputC)) {
    if(inputA > 0 && inputB > 0 && inputC > 0) {

      if(inputA == inputB && inputA == inputC && inputB == inputC) {
        drawTriangle('triangle-equilateral');
        outputText("Triangle is equilateral");
      } else if((inputA == inputB && inputB != inputC && inputA != inputC) ||
      (inputB == inputC && inputB != inputA && inputC != inputA)  ||
      (inputA == inputC && inputA != inputB && inputC != inputB)) {
        drawTriangle('triangle-isosceles');
        outputText("Triangle is isosceles");

      } else if(inputA != inputB && inputA != inputC && inputB != inputC) {
        drawTriangle('triangle-scalene');
        outputText("Triangle is scalene");
      }

    } else {
        drawTriangle('');
        outputText("Is not possible to calculate this kind of triangle");
    }


  } else {
    drawTriangle('');
    outputText("Please enter numbers - A side, B side and C side");
  }

}
