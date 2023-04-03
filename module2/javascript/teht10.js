let candamount = prompt("how many candidates?");
let info = []
for (let i=1; i<=candamount; i++) {
let candname = prompt("what are the names of the candidates?")
    info.push({
    name: candname,
    votes: 0,}
    )
}



let voteramount = prompt("how many voters?");

for (let i=1; i<=voteramount; i++) {
let vote = prompt("voter" + i + ":s vote?");
for (let a=0; a <= (candamount - 1); a++) {
if (vote == info[a].name) {
info[a].votes += 1 ;
}
}
}


info.sort((a, b) => {
   return b.votes - a.votes;
});

console.log(info[0].name + " is the winner");

for (i=0; i<=(candamount - 1); i++) {
console.log(info[i].name,":", info[i].votes, "votes")
}