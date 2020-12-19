const fs = require('fs');
const lines = fs.readFileSync('Advent Challenges/input2.txt', {encoding: 'utf-8'}).split('\n');
let validPasswords = 0;
for (let i=0; i < lines.length; i++) {
    const fields = parseFields(lines[i]);
    if (isPasswordValid(fields)) {
        validPasswords++;
    }
}
console.log(validPasswords);

function parseFields (password) {
    return password.replace('-', ' ').replace(':', '').split(' '); 
}

function isPasswordValid (fields) {
    const minimum = fields[0];
    const maximum = fields[1];
    const letter = fields[2];
    const password = fields[3];
    let letterMatches = 0;
    for (let i=0; i < password.length; i++) {
        if(password.charAt(i) === letter) {
            letterMatches++;
        }
    }
    return letterMatches >= minimum && letterMatches <= maximum;
}