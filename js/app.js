document.getElementById("btn-triangle").addEventListener("click", function () {
  const traingleInputB = getInputValuById("triangle-inputB");
  const traingleInputH = getInputValuById("triangle-inputH");
  const calculate = 0.5 * traingleInputB * traingleInputH;
  const value = toFixed(calculate);
  setCalculation("Triangle", value);
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangleInputW = getInputValuById("rectangle-inputW");
  const reactangleInputL = getInputValuById("rectangle-inputL");
  const calculate = rectangleInputW * reactangleInputL;
  const value = toFixed(calculate);
  setCalculation("Rectangle", value);
});

document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogramInputB = getInputValuById("parallelogram-inputB");
    const parallelogramInputH = getInputValuById("parallelogram-inputH");
    const calculate = parallelogramInputB * parallelogramInputH;
    const value = toFixed(calculate);
    setCalculation("Parallelo", value);
  });

document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombusInput1 = getInputValuById("rhombus-input1");
  const rhombusInput2 = getInputValuById("rhombus-input2");
  const calculate = 0.5 * rhombusInput1 * rhombusInput2;
  const value = toFixed(calculate);
  setCalculation("Rhombus", value);
});

document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagonInputP = getInputValuById("pentagon-inputP");
  const pentagonInputB = getInputValuById("pentagon-inputB");
  const calculate = 0.5 * pentagonInputP * pentagonInputB;
  const value = toFixed(calculate);
  setCalculation("Pentagon", value);
});

document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipseInputA = getInputValuById("ellipse-inputA");
  const ellipseInputB = getInputValuById("ellipse-inputB");
  const calculate = 3.14 * ellipseInputA * ellipseInputB;
  const value = toFixed(calculate);
  setCalculation("Ellipse", value);
});
