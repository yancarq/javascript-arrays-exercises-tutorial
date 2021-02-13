let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName (array, search){
    let newArray = new Array(); 
    
    newArray.push(array.filter(name => {
      // console.log( name.toLowerCase().includes(search.toLowerCase()));
        return (name.includes(search));
    }));
    return newArray;
}


console.log(filterByName(names, 'am'));