// PART ONE ( FIZZ BUZZ)

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizz buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

// PART 2 ( PRIME TIME)
let n = 4;

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }
    return true; 
}

while (true) {
    n++; 
    if (isPrime(n)) {
        console.log(n);
        break; 
}
}

// PART 3 ( FEELING LOOPY ) 

let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let rows = csvData.split("\n"); 
for (let row of rows) {
    let cells = row.split(","); 
    console.log(cells[0], cells[1], cells[2], cells[3]); 
}

    