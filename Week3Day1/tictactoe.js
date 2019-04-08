var isXTurn = true;
var boxes = document.querySelectorAll(".box");
boxes.forEach(function(val){
  val.addEventListener("click", function(){
    if(this.classList.contains("x") || this.classList.contains("o")){
      return;
    }
    // console.log(this, "was clicked");
    // condition ? ifTrue : ifFalse;
    var classToAdd = isXTurn ? "x" : "o";
    this.classList.add(classToAdd)
    // isXTurn switch
    isXTurn = !isXTurn;
    isGameOver()
  })
})
function isGameOver(){
  //if statments for win condidtions
  if(boxes[0].classList.toString() !== "box" && boxes[0].classList.toString() && boxes[0].classList.toString() === boxes[1].classList.toString(){
    console.log("Game Over");
  })
}
