//Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  }
  else {
    return "Not Found";
  }
  // Only change code above this line
}

//Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];

//Accessing Nested Objects
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

//Record Collection
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && value !== "" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//Iterate with JavaScript While Loops
// Setup
const myArray = [];

// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

//Iterate with JavaScript For Loops
ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}

//Iterate Odd Numbers With a For Loop
// Setup
myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
//Count Backwards With a For Loop

// Setup
myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
//Iterate Through an Array with a For Loop
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total=0;
for(let i=0;i<myArr.length;i++){
  total+=myArr[i];
}

//Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    product*=arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
//Iterate with JavaScript Do...While Loops
// Setup
 myArray = [];
 i = 10;

// Only change code below this line
 do{
  myArray.push(i);
  i++;
}while (i < 10);

//Replace Loops using Recursion
function sum(arr, n) {
  // Only change code below this line
  if(n<=0){
    return 0;
  }
  else{
    return sum(arr,n-1)+arr[n-1];

  }
  // Only change code above this line
}
//Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");

//Generate Random Fractions with JavaScript
function randomFraction() {
 
  var result = 0;
  
  while (result === 0) {
    result = Math.random();
  }

  return result;
  // Only change code above this line.
}

//Generate Random Whole Numbers with JavaScript
function randomWholeNum() {

  // Only change code below this line

  return Math.floor(Math.random()*10);
}