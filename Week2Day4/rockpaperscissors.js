var button = document.querySelectorAll(".choice");
var cpu = ["rock","paper","scissors"];
var l = 1;
var i=0;
var j=0;
var k=0;
button.forEach(function(val, index){
  val.addEventListener("click",function(){
    var choice = this.id;
    document.querySelector("#playerOutput").innerText = "You chose "+choice;
    var connor = cpu[cpuChoice()];
    document.querySelector("#cpuOutput").innerText = "Computer chose "+connor;
    if(index==cpu.indexOf(connor)){
      i++;
    }
    else if((index+1)%3==cpu.indexOf(connor)){
      j++;
    }
    else{
      k++;
    }
    l++;
    document.querySelector(".game").innerText = "Game "+l;
    document.querySelector("#tie").innerText = "Ties: "+i;
    document.querySelector("#loss").innerText = "Losses: "+j;
    document.querySelector("#win").innerText = "Wins: "+k;
  })
})
function cpuChoice(){
  return Math.floor(Math.random()*3);
}
