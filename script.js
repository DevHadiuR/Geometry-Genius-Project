/*
1.get base value(added an id in the base input field)
2.use getElementByid to access the input field.
3.get value from the input field . (value id string now)
4.convert the value to a number use paseFlaot.
*/

function calculateTriangleArea() {
  // triangle base
  const triangleBaseValue = document.getElementById("triangle-base").value;
  const triangleBaseValueParseFloat = parseFloat(triangleBaseValue);

  // triangle height
  const triangleHeightValue = document.getElementById("triangle-height").value;
  const triangleHeightValueParseFloat = parseFloat(triangleHeightValue);

  // calculate area//
  const area =
    0.5 * triangleBaseValueParseFloat * triangleHeightValueParseFloat;
  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = area;
  //////////////////
  document.getElementById("triangle-base").value = "";
  document.getElementById("triangle-height").value = "";
}

//---------------------------------------------------------------------------
function calculateRectangleArea() {
  const recLenVal = document.getElementById("rectangle-length").value;
  const recLen = parseFloat(recLenVal);
  //----------------------------
  const recWidVal = document.getElementById("rectangle-width").value;
  const recWid = parseFloat(recWidVal);
  //--------------------------------
  const area = recLen * recWid;
  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = area;
  //----------------------------------
  document.getElementById("rectangle-length").value = "";
  document.getElementById("rectangle-width").value = "";
}
//-------------------------------------------------------------------------
function calculateParallelogramArea() {
  const parallelogramBaseValue =
    document.getElementById("parallelogram-base").value;
  const baseFloat = parseFloat(parallelogramBaseValue);
  //-------------------------
  const parallelogramHeightValue = document.getElementById(
    "parallelogram-height"
  ).value;
  const heightFloat = parseFloat(parallelogramHeightValue);
  //--------------------------------
  const area = baseFloat * heightFloat;
  document.getElementById("parallelogram-area").innerText = area;
  //------------------------------------
  document.getElementById("parallelogram-base").value = "";
  document.getElementById("parallelogram-height").value = "";
}
