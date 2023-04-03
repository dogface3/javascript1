const number = prompt("how many participants?");
let names = []
console.log(number)
for (i=1; i <= number ; i++) {
let name = prompt("give participant name:");
names.push(name)
 }

names.sort()

console.log(names)

let nameslist = document.getElementById("names");
names.forEach((item)=>{
let li = document.createElement("li");
li.innerText = item;
nameslist.appendChild(li);  })