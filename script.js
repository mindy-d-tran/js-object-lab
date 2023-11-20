// part 3
console.log("-----Part 3-----");
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let csvArray = csv.split("\n");
// console.log(csvArray);

let index = 0;
//edit the array even further to make it a 2d array
while (index < csvArray.length) {
  //stores the spliting results in the arary/
  csvArray[index] = csvArray[index].split(",");
  // let j = 0;
  
  // let rowString = "";
  // while (j < row.length - 1) {
    //   rowString += `${row[j]}, `;
    //   j++;
    // }
    // rowString += row[j];
    
    index++;
}

//stores the amount of columns in the csv
let columns = csvArray[0].length;
console.log(columns);
console.log(csvArray);


//pt 3
let csvObject = [];
csvObject.length=csvArray.length-1;

for(let i=0; i<csvObject.length;i++){
  csvObject[i] = {};
}

for(let i=0;i<csvObject.length;i++){
  for(let j=0;j<csvArray[0].length;j++) {
    let keyword = csvArray[0][j].toLowerCase();
    csvObject[i][keyword]=csvArray[i+1][j];
  }
}

console.log(csvObject);