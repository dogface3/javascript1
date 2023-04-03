
let input = prompt("give number")
let intinput = parseInt(input)
let list = []
while (intinput != 0) {
list.push(intinput)
input = prompt("give number")
intinput = parseInt(input)
}


list.sort((a, b) => a - b);
list.reverse()
console.log(list)