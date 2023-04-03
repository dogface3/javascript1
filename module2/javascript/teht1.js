'use script'
let numbers = []
for (let i = 0; i <= 4; i ++) {
    let number = prompt("give number");
    numbers.push(number)
}



for (let i = numbers.length - 1; i >= 0 ; i--) {
    console.log(numbers[i]) }


