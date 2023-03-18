document.getElementById("btn-triangle").addEventListener("click", function () {
  const traingleInputB = getInputValuById("triangle-inputB");
  const traingleInputH = getInputValuById("triangle-inputH");
  const value = 0.5 * traingleInputB * traingleInputH;
});

document.getElementById("btn-rectangle").addEventListener("click", function () {
  const rectangleInputW = getInputValuById("rectangle-inputW");
  const reactangleInputL = getInputValuById("rectangle-inputL");
  const value = rectangleInputW * reactangleInputL;
});

document
  .getElementById("btn-parallelogram")
  .addEventListener("click", function () {
    const parallelogramInputB = getInputValuById("parallelogram-inputB");
    const parallelogramInputH = getInputValuById("parallelogram-inputH");
    const value = parallelogramInputB * parallelogramInputH;
  });

document.getElementById("btn-rhombus").addEventListener("click", function () {
  const rhombusInput1 = getInputValuById("rhombus-input1");
  const rhombusInput2 = getInputValuById("rhombus-input2");
  const value = 0.5 * rhombusInput1 * rhombusInput2;
});

document.getElementById("btn-pentagon").addEventListener("click", function () {
  const pentagonInputP = getInputValuById("pentagon-inputP");
  const pentagonInputB = getInputValuById("pentagon-inputB");
  const value = 0.5 * pentagonInputP * pentagonInputB;
});

document.getElementById("btn-ellipse").addEventListener("click", function () {
  const ellipseInputA = getInputValuById("ellipse-inputA");
  const ellipseInputB = getInputValuById("ellipse-inputB");
  const value = 3.14 * ellipseInputA * ellipseInputB;
});
