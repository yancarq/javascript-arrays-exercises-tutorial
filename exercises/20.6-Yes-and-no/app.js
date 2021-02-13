let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let newArray = new Array();

newArray = theBools.map(element =>{
    if(element ==0){
        return 'woko';
    }else{
        return 'wiki';
    }
});

console.log(newArray);
