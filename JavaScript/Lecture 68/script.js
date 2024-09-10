const boxes=document.getElementsByClassName("box");
console.log(boxes)
boxes[3].style.backgroundColor="purple";
document.getElementById("red-box").style.backgroundColor="red";
document.querySelector(".box").style.backgroundColor="cyan";

// document.querySelectorAll(".box").style.backgroundColor="cyan";
// but it does not change background color of all the boxes because it return html collection of boxes and we cannot chnage the style of html
// so we have to select each element of box
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="cyan"
})