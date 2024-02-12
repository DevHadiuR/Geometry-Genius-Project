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
