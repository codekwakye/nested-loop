
const tableSize = 10;


for (let i = 1; i <= tableSize; i++) {
    
    for (let j = 1; j <= tableSize; j++) {
     
        process.stdout.write((i * j) + "\t");
    }
    
    console.log();
}
