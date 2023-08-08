let saveEl = document.getElementById("save-el")
let pasngCount = document.getElementById("count-el") 
 let count = 0

 console.log(saveEl)

function increment() {
    count += 1
    pasngCount.innerText = count
}
function save(){
    let countStr = count + " - " 
    saveEl.textContent += countStr
    pasngCount.textContent = 0
    count = 0
}
