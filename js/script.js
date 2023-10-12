var moods = document.querySelector("#moods");
var body = document.querySelector("body");

moods.addEventListener("change", function(e){
    var mood = e.target.value;
    if (mood === "happy"){
        body.classList.remove("sad");
        body.classList.remove("passionate");
        body.classList.add("happy");
    }else if (mood === "sad"){
        body.classList.remove("happy");
        body.classList.remove("passionate");
        body.classList.add("sad");
    }else{
        body.classList.remove("happy");
        body.classList.remove("sad");
        body.classList.add("passionate");
    }
});