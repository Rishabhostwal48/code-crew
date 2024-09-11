let logbtn = document.querySelector("#logbtn")
let logpage = document.querySelector(".logpage")
let logbtn1 = document.querySelector("#logbtn1")
let home = document.querySelector(".logbtn2")
// let page = document.querySelector(".main")
// let mb = document.querySelector("#btnn")
console.log(logbtn)
console.log(logpage)
console.log(page)
console.log(mb)


logbtn.addEventListener("mousedown", () => {
    logpage.style="display:flex";
    
})
function cb(){
    document.querySelector(".main").style.backgroundImage = "url('happy.jpg')";
    // document.querySelector(".main").style.position="relative";
}
// mb.addEventListener("click", () => {
//     page.style.backgroundimage="url('tesla.png')";
//     page.style.position="fixed";
//     })
// logbtn.addEventListener("click", () => {
//    logbtn.style="display:none";
//    logbtn1.style="display:none";
//    logbtn.style="visibility:hidden";
//    logbtn1.style="visibility:hidden";
// })

