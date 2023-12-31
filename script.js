// part 1 + 2
console.log("-----Part 1 & 2-----");
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

console.log(csv);
let csvArray = csv.split("\n");

let index = 0;
//edit the array even further to make it a 2d array
while (index < csvArray.length) {
  //stores the spliting results in the arary/
  csvArray[index] = csvArray[index].split(",");
  index++;
}

//stores the amount of columns in the csv
let columns = csvArray[0].length;
console.log(columns);
console.log(csvArray);

//pt 3
console.log("-----Part 3-----");

// create new array to contain object
let csvObject = [];
// -1 from csvArray because the first row contains table headers
csvObject.length = csvArray.length - 1;

// fill array with empty objects .fill({}) does work for some reason. it makes the same object for the whole array for some reason
for (let i = 0; i < csvObject.length; i++) {
  csvObject[i] = {};
}

// add key value pair in each row
for (let i = 0; i < csvObject.length; i++) {
  for (let j = 0; j < csvArray[0].length; j++) {
    let keyword = csvArray[0][j].toLowerCase();
    csvObject[i][keyword] = csvArray[i + 1][j];
  }
}

console.log(csvObject);

//part 4
console.log("-----Part 4-----");

// remove first object
csvObject.shift();

// adding object at index 1. must include 0 if you dont want to delete anything
csvObject.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});

// adding object to the end of the array
csvObject.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let avgAge = 0;
for (let i = 0; i < csvObject.length; i++) {
  avgAge += parseInt(csvObject[i].age);
}
avgAge /= csvObject.length;
console.log(`Average age: ${avgAge}`);

// part 5
console.log("-----Part 5-----");

let objToCSV = [];

// store keys in array first
objToCSV[0] = Object.keys(csvObject[0]);

/* capitalizing the tags 
credit to Dillion Megida https://www.freecodecamp.org/news/javascript-capitalize-first-letter-of-word/
*/
objToCSV[0][0]= objToCSV[0][0].toUpperCase();

for(let i=1; i<objToCSV[0].length;i++){
  let str = ""
  str += objToCSV[0][i][0].toUpperCase();
  str+= objToCSV[0][i].slice(1);
  objToCSV[0][i] = str;
}

// add values to array
for (let i = 0; i < csvObject.length; i++) {
  objToCSV.push(Object.values(csvObject[i]));
}

// join array by \n
let flatObj =  objToCSV.join("\n");
console.log(flatObj);
