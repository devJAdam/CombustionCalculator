document.getElementById("submitButton").onclick = () => {
  var x = Number(document.getElementById("x").value);
  var y = Number(document.getElementById("y").value);
  var z = Number(document.getElementById("z").value);
  console.log(x);

  document.getElementById("xSubscript").innerHTML = x != 1 ? x : "";
  document.getElementById("ySubscript").innerHTML = y != 1 ? y : "";
  document.getElementById("zSubscript").innerHTML = z != 1 ? z : "";

  if (x < 1) {
    alert("Please enter a valid value for x!");
    return;
  } else if (y < 1) {
    alert("Please enter a valid value for y!");
    return;
  } else if (z < 0) {
    alert("Please enter a valid value for z!");
    return;
  } else {
    if (z === 0) {
      document.getElementById("oxygen").innerHTML = "";
      document.getElementById("zSubscript").innerHTML = "";
    } else {
      document.getElementById("oxygen").innerHTML = "O";
      document.getElementById("zSubscript").innerHTML = z != 1 ? z : "";
    }
    var c = x;
    var d = y / 2;
    var b = x + y / 4 + z / 2;
    console.log(a);

    if (b % 1 != 0) {
      numOfDec = countDecimals(b);
      res = reduce(b, numOfDec);
      multiplier = res[1];
      if (multiplier == 1) {
        document.getElementById("a").innerHTML = "";
      } else {
        document.getElementById("a").innerHTML = multiplier;
      }
      c = c * multiplier;
      d = d * multiplier;
      b = b * multiplier;
    } else {
      document.getElementById("a").innerHTML = "";
    }
    document.getElementById("c").innerHTML = c;
    document.getElementById("d").innerHTML = d;
    document.getElementById("b").innerHTML = b;
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
