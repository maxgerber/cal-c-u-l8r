//Declarations
var count = 0;
var screencount = '' + count;

function screenify() {
    document.getElementById("count").innerHTML = screencount;
}

//Start of program proper
window.addEventListener("DOMContentLoaded", function() {
    screenify();

    document.getElementById("ac").addEventListener("click", function() {
        screencount = 0;
        screenify();
    });

    document.getElementById("0").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "0";
        } else {
            screencount += "0";
        }
        screenify();
    });

    document.getElementById("1").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "1";
        } else {
            screencount += "1";
        }
        screenify();
    });

    document.getElementById("2").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "2";
        } else {
            screencount += "2";
        }
        screenify();
    });

    document.getElementById("3").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "3";
        } else {
            screencount += "3";
        }
        screenify();
    });

    document.getElementById("4").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "4";
        } else {
            screencount += "4";
        }
        screenify();
    });

    document.getElementById("5").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "5";
        } else {
            screencount += "5";
        }
        screenify();
    });

    document.getElementById("6").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "6";
        } else {
            screencount += "6";
        }
        screenify();
    });

    document.getElementById("7").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "7";
        } else {
            screencount += "7";
        }
        screenify();
    });

    document.getElementById("8").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "8";
        } else {
            screencount += "8";
        }
        screenify();
    });

    document.getElementById("9").addEventListener("click", function() {
        if (screencount === "0") {
            screencount = "9";
        } else {
            screencount += "9";
        }
        screenify();
    });

    document.getElementById("add").addEventListener("click", function() {
          count += Number(screencount);
          screencount = "0";
        screenify();
    });

    document.getElementById("equals").addEventListener("click", function() {
          count += Number(screencount);
          screencount = '' + count;
        screenify();
    });
});
