// part 1 + 2 
console.log("-----Part 1 & 2-----");
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let csvArray = csv.split("\n");
// console.log(csvArray);

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