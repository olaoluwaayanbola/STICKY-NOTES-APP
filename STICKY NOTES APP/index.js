const button = document.getElementById('button');
const stickyModal = document.getElementById("stickyModal")
var random_degree = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-8deg)"];

button.addEventListener("click",function(){
    stickyModal.style.display = "block";
})

const close = document.getElementById('close')
close.addEventListener("click",function (){ 
    stickyModal.style.display="none";
})

const textAreaValue = document.getElementById("textAreaValue")
const mainDoc = document.getElementById("mainDoc")

function stickyNotes() {
    const div = document.createElement("div");
    const para = document.createElement("p")

    para.setAttribute("id","p")
    div.setAttribute("id","Notes-container")

    div.setAttribute("style",`float:left;transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`)

    para.innerHTML = textAreaValue.value
    div.appendChild(para)

    var random = Math.floor(Math.random()*220)
    var random2 = Math.floor(Math.random()*100)
    var random3 = Math.floor(Math.random()*250)
    div.style.backgroundColor= `rgb(${random},${random2},${random3})`
    
    mainDoc.appendChild(div)
    textAreaValue.value = " "

    div.addEventListener("dblclick", () => {
        div.remove();
    })
}

stickyModal.addEventListener("keydown",function(event) {
    if (event.key == "Enter") {
        stickyNotes() 
    }
})
