let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
var listCounts = new Array();

for (let item in par) {
    let word = par[item].toLowerCase();
    if (word !== ' ') {
        if (counts[word] != undefined) {
            counts[word] += 1;
        } else {
            counts[word] = 1;
        }
    }
}

console.log(counts);