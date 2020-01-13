window.onload = function () {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "Number of visits " + localStorage.clickcount;
  } else {
    document.getElementById("result").innerHTML = "Sorry, the browser does not support web storage...";
  }
}