

var myNumbers = [23,234,345,4356234,243,43,56,2];

// your code here
let newArray = new Array();
newArray = myNumbers.map(myFunction)
console.log(newArray);


function myFunction(val){
    return val*3;
}