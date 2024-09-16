const button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".container").innerHTML = "<b>yayy! you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", () => {
    alert("Dont hack us with right click")
})

document.addEventListener("keydown", (evt) => {
   console.log(evt.key,evt.keyCode)
})