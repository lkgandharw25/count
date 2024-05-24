const endDate = prompt("enter your  age" )
const newDate = "30 march 2024 "
document.getElementById("endDate").innerText = endDate;
const inputs = document.querySelectorAll("input")


function clock(){
    const end = new Date(endDate);
    const now = new Date(newDate)
    const diff = (now-end)/1000;
    if(diff<0)return;
    inputs[0].value = Math.floor(diff/3600/24/360);
    inputs[1].value = (Math.floor(diff/3600/24));
    inputs[2].value = (Math.floor(diff/3600));
    inputs[3].value =Math.floor (diff/60);
    inputs[3].value =Math.floor (diff);
}
clock()

setInterval(() => {
    clock()
    
}, 1000);