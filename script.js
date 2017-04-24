//Declarations
var current = "0";
var arith = "";
var equals = 0;
var equalCount = 0;
var lulz = [ "55378008", "55318008", "101", "1015",
// "37047734", "7734206", "1134206", "707", "5707", "070616"
];

function screenify() {
    document.getElementById("count").innerHTML = current;
    equalCount = 0;
}

function equalify() {
    document.getElementById("count").innerHTML = equals;
    arith = '' + equals;
    current = "";
}
//Start of program proper
window.addEventListener("DOMContentLoaded", function() {
    screenify();

    document.getElementById("ac").addEventListener("click", function() {
        current = "0";
        arith = current;
        screenify();
    });

    document.getElementById("ce").addEventListener("click", function() {
        current = "0";
        screenify();
    });

    document.getElementById("0").addEventListener("click", function() {
        if (current === "0") {
            current = "0";
        } else {
            current += "0";
        }
        screenify();
    });

    document.getElementById("1").addEventListener("click", function() {
        if (current === "0") {
            current = "1";
        } else {
            current += "1";
        }
        screenify();
    });

    document.getElementById("2").addEventListener("click", function() {
        if (current === "0") {
            current = "2";
        } else {
            current += "2";
        }
        screenify();
    });

    document.getElementById("3").addEventListener("click", function() {
        if (current === "0") {
            current = "3";
        } else {
            current += "3";
        }
        screenify();
    });

    document.getElementById("4").addEventListener("click", function() {
        if (current === "0") {
            current = "4";
        } else {
            current += "4";
        }
        screenify();
    });

    document.getElementById("5").addEventListener("click", function() {
        if (current === "0") {
            current = "5";
        } else {
            current += "5";
        }
        screenify();
    });

    document.getElementById("6").addEventListener("click", function() {
        if (current === "0") {
            current = "6";
        } else {
            current += "6";
        }
        screenify();
    });

    document.getElementById("7").addEventListener("click", function() {
        if (current === "0") {
            current = "7";
        } else {
            current += "7";
        }
        screenify();
    });

    document.getElementById("8").addEventListener("click", function() {
        if (current === "0") {
            current = "8";
        } else {
            current += "8";
        }
        screenify();
    });

    document.getElementById("9").addEventListener("click", function() {
        if (current === "0") {
            current = "9";
        } else {
            current += "9";
        }
        screenify();
    });

    document.getElementById("bb").addEventListener("click", function() {
            current = lulz[ Math.floor( Math.random() * 4 ) ];
        screenify();
    });

    document.getElementById("decimal").addEventListener("click", function() {
        if (current === "0") {
            current = "0.";
        } else {
            current += ".";
        }
        screenify();
    });

    document.getElementById("add").addEventListener("click", function() {
          arith += current + "+";
          current = "0";
        screenify();
    });

    document.getElementById("divide").addEventListener("click", function() {
          arith += current + "/";
          current = "0";
        screenify();
    });
    document.getElementById("multiply").addEventListener("click", function() {
          arith += current + "*";
          current = "0";
        screenify();
    });
    document.getElementById("subtract").addEventListener("click", function() {
          arith += current + "-";
          current = "0";
        screenify();
    });

    document.getElementById("equals").addEventListener("click", function() {
          equalCount++;
          if (equalCount < 2) {
          arith += current;
          equals = eval(arith);
        equalify();
    }
    });
});
