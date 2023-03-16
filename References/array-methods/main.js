// ********MAP********
const array1 = [1, 4, 9, 16];

//loop through the array
console.log(`%c---MAP----`, `color:yellow`);
const map1 = array1.map((ele, idx) => {console.log(" i:" + idx, ele) ;})

const obj = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
]
//reformat object 
const reformat = obj.map(({key,value}) => ({[key]:value}));
console.log(`%c---reformat----`, `color:yellow`);
console.log(reformat);


//? Array.proptotype.map.call() 
// can apply for a non-array obj
//can generically on a NodeList 
const ele = document.querySelectorAll('selectoption:checked');
const values = Array.prototype.map.call(ele , ({value}) => value);


//? convert string array to number array
// can use map((str) => parseInt(str));
// map(Number)
const str = ["1","2","3"].map(Number)
console.log(str);


// ********FIND********
//? Find() return the first element
console.log(`%c---FIND----`, `color:yellow`);
const findArr = array1.find((ele,idx) => {
    if(ele > 5){
        console.log(ele,"i - " + idx)
    }
});


//find specific object in array
const findArr1 = obj.find(({key}) => key === 3);
console.log(findArr1);

// ********FINDINDEX********
//? Return the index of the first element 
console.log(`%c---FINDINDEX----`, `color:yellow`);
//want to return the index of element larger than 5
const isLarge = (element) => element > 5;
console.log(array1.findIndex(isLarge));


// ********FILTER********
//? Filter the result
console.log(`%c---FILTER----`, `color:yellow`);
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

//filter based on the function 
function filterItem(arr, query){
    return arr.filter((ele) => 
        {
           return ele.toLowerCase().includes(query.toLowerCase());
           
        }
    );
}
console.log(filterItem(words, "es"));

//handler array
const modify = words.filter((word,idx,arr)=>{
    //modify
    arr[idx + 1] += "extra";
    console.log(word)

    // ! append array
    // arr.push("new");
    // console.log(arr)

    // ! deleting
    // arr.pop();
    // console.log(arr)

    return word.length < 6
})
console.log(modify)


// ********CONCAT********
const arr2 = [];
const arr3 = array1.concat(arr2);
const arr4 = array1.concat(1,arr2);

// ********SORT********
//? Default sort order is ascending
console.log(`%c---SORT----`, `color:yellow`);
console.log(array1.sort());

//sort descending larger - smaller number
function compare(a,b){
    return b-a;
}
console.log(array1.sort(compare));


//?sort array of object
//sort by value
let sortObj = obj.sort((a,b) => b.value - a.value);
console.log(sortObj)
// !sort by name string used compare if(name A < nameB){}

//? sorting non-ASCII characters (e, é, è, a, ä,) other languages
//use localeCompare()
// array1.sort((a, b) => a.localeCompare(b));

// ********REDUCE********
//? callback function on each element 
const inital = 0;
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue,
inital);

console.log(sum)


// ********JOIN********
array1.join()



// ********SLICE********
// slice(start, end)
array1.slice(2,3);



// ********SPLICE********
//removing and replacing existing ele
// splice(start, deleteCount, item1)
array1.splice(1, 0, "2");

//*****************************************

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];


// ********MORE MAP********
console.log(`%c---MAP----`, `color:red`);

//1. Get array of all names
let mapArr = characters.map(ele => ele.name);
console.log("name",mapArr);

//2. Get array of all heights
mapArr = characters.map(ele => ele.height);
console.log("height",mapArr);

//3. Get array of objects with just name and height properties
mapArr = characters.map((ele) => {
    const obj = {name: ele.name, height: ele.height}
    return obj;
});
console.log("obj", mapArr);

//4. Get array of all first names
console.log(mapArr[0])

// ********MORE REDUCE********
console.log(`%c---REDUCE----`, `color:red`);

//1. Get total mass of all characters
const init = 0;  

let total = characters.reduce(sumFunc,init)
console.log(total)

function sumFunc(total,num){
    return total+num.mass;
}

//2. Get total height of all characters
total = characters.reduce(sumHeight,init)
console.log(total)

function sumHeight(total, currentValue){
    return total + currentValue.height
}

//3. Get total number of characters by eye color

total = characters.reduce(totalStr,init)
console.log(total)

function totalStr(total, currentValue){ 
    return total + currentValue.eye_color.length
}
//4. Get total number of characters in all the character names
total = characters.reduce(totalName,init)
console.log(total)

function totalName(total, currentValue){ 
    return total + currentValue.name.length
}

// ********MORE FILTER********
console.log(`%c---FLITER----`, `color:red`);

//1. Get characters with mass greater than 100
const greater = characters.filter((ele) => {
        return ele.mass > 100;
    })
console.log(greater)

//2. Get characters with height less than 200
const less = characters.filter((ele) => {
    return ele.height < 200;
})
console.log(less)
//3. Get all male characters
const male = characters.filter((ele) => {
    return ele.gender === 'male';
})
console.log(male)

//4. Get all female characters
const female = characters.filter((ele) => {
    return ele.gender === 'female';
})
console.log(female)

// ********MORE SORT********
console.log(`%c---SORT----`, `color:red`);

//1. Sort by mass
const sortM = characters.sort((a,b) => a.mass - b.mass);
console.log(sortM)

//2. Sort by height
const sortH = characters.sort((a,b) => a.height - b.height);
console.log(sortH)
//3. Sort by name
const sortN = characters.sort((a,b) => {
    if(a.name < b.name){
        return -1;
    }
     
    if(a.name > b.name){
        return 1;
    }
    return 0;
})
console.log(sortN)

//4. Sort by gender

const sortG = characters.sort((a,b) => {
    if(a.gender < b.gender){
        return -1;
    }
     
    if(a.gender > b.gender){
        return 1;
    }
    return 0;
})
console.log(sortG)

// The bottom two are new to you, use the resources listed or find your own and do your best!


// ********EVERY********
console.log(`%c---EVERY----`, `color:red`);

//1. Does every character have blue eyes?
const blueE = characters.every(checkEyes);

function checkEyes(ele){
    if (ele.eye_color === 'blue'){
        return true
    }else{
        return false
    }
}
console.log(blueE)

//2. Does every character have mass more than 40?
const massE = characters.every((ele) =>{ return ele.mass > 40});
console.log(massE)

//3. Is every character shorter than 200?
const shortE = characters.every((ele) =>{ return ele.height < 200});
console.log(shortE)
//4. Is every character male?
const maleE = characters.every((ele) =>{ return ele.gender === 'male'});
console.log(maleE)


// ********SOME********
console.log(`%c---SOME----`, `color:red`);

//1. Is there at least one male character?
const Omale = characters.some((ele) => {return ele.gender === 'male'});
console.log(Omale);
//2. Is there at least one character with blue eyes?
const Oblue = characters.some((ele) => {return ele.eye_color === 'blue'});
console.log(Oblue);
//3. Is there at least one character taller than 210?
const Oheight = characters.some((ele) => {return ele.height > 210});
console.log(Oheight);
//4. Is there at least one character that has a mass less than 50?
const Omass = characters.some((ele) => {return ele.mass < 50});
console.log(Omass);