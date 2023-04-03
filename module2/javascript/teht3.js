
let names = []

for (i=0; i <= 5; i++) {
let name = prompt("give dog name")
names.push(name)
}

names.sort()
names.reverse()

let nameslist = document.getElementById("names");
names.forEach((item)=>{
let li = document.createElement("li");
li.innerText = item;
nameslist.appendChild(li);  })
