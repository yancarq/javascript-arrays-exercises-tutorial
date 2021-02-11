var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    let newArray = people.slice()
    newArray.forEach(function(item,index){
        if(personName == item){
            newArray.splice(index,1); 
        }
    })
     
    return newArray;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));