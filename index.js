document.getElementById("submitButton").onclick = () => {
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  var z = Number(document.getElementById("z").value);
  console.log(x);

  document.getElementById("xSubscript").innerHTML = x != 1 ? x : "";
  document.getElementById("ySubscript").innerHTML = y != 1 ? y : "";
  document.getElementById("zSubscript").innerHTML = z != 1 ? z : "";

  if (x == 0) {
    alert("Please enter a value for x!");
    return;
  } else if (y == 0) {
    alert("Please enter a value for y!");
    return;
  } else {
    if (z === 0) {
      document.getElementById("oxygen").innerHTML = "";
      document.getElementById("zSubscript").innerHTML = "";
    } else {
      document.getElementById("oxygen").innerHTML = "O";
      document.getElementById("zSubscript").innerHTML = z != 1 ? z : "";
    }
    var b = x;
    var c = y / 2;
    var a = x + y / 4 + z / 2;
    console.log(a);

    if (a % 1 != 0) {
      numOfDec = countDecimals(a);
      res = reduce(a, numOfDec);
      multiplier = res[1];
      b = b * multiplier;
      c = c * multiplier;
      a = a * multiplier;
    }
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = c;
    document.getElementById("a").innerHTML = a;
  }
};

function reduce(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}

countDecimals = function (num) {
  return num.toString().split(".")[1].length || 0;
};
