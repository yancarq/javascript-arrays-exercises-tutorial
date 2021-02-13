// Code goes here
function matrixBuilder(rowCol){
    let matrix = [];
    
    for(let i = 0; i < rowCol ;i++){
        let arr = [];
        for(let j=0; j <rowCol; j++){
            arr.push( Math.floor(Math.random() * 1)+1);
        }
        matrix.push(arr);
    }
    return matrix;
}


// do not change anything from this line down
console.log(matrixBuilder(5))