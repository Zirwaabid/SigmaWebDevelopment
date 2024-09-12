const container = document.querySelector(".container");
let div = document.createElement("div");
div.innerHTML = "I have been inserted by <b>Zirwa<b/> ";
container.append(div);

container.insertAdjacentHTML("beforeend", "<b>Hi How are you<b/>")