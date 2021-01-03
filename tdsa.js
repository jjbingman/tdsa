function myFunction() {
    var x = document.getElementById("dropMenu");
    if (x.className === "nav") {
        x.className += " responsive";
    }
    else {
        x.className = "nav";
    }
}