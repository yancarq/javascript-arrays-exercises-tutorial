let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
let odd = new Array();//impar
let even = new Array(); //par

function mergeTwoList(listInteger) {
    let newArray = new Array();
    
    listInteger.forEach(function (value){
        if (value % 2 == 0) {
            even.push(value);
        } else {
            odd.push(value);
        }
    });

    odd.forEach(function (value) {
        newArray.push(value);
    });
    even.forEach(function (value) {
        newArray.push(value);
    });
    
    return newArray;

}

//console.log(mergeTwoList(list_of_numbers))

