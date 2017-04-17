var count = 10;
window.addEventListener("load", function(){
    document.getElementById("count").innerHTML = count;
});

document.getElementById("ac").addEventListener("click", function() {
    count = 0;
    document.getElementById("count").innerHTML = count;
});
