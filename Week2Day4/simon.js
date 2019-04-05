var buttons = document.querySelectorAll("#button");
var div = buttons[random()];
var userPick = [];
var counter = document.getElementById("count");
var count = 0;


buttons.forEach(function(val){
    val.addEventListener("mousedown", function(){
        val.classList.add("active")
        userPick.push(val);
    })
    val.addEventListener("mouseup", function(){
        val.classList.remove("active")
        count++
        counter.innerHTML = count;
    })
})

function random(){
    return Math.floor(Math.random() * 4);
}

window.setTimeout(function(){
    div.classList.add("active");
},  0)

window.setTimeout(function(){
    div.classList.remove("active");
}, 1000)

// function compare(){
//     if(div === val){
//         counter++;
//         return;
//     }
// }
