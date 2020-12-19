const fs = require('fs');
const lines = fs.readFileSync('Advent Challenges Completed/input2.txt', {encoding: 'utf-8'}).split('\n');
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
    let position1 = fields[0];
    let position2 = fields[1];
    position1 --;
    position2 --;
    const letter = fields[2];
    const password = fields[3];
    let letterMatches = 0;
    for (let i=0; i < password.length; i++) {
        if((password.charAt(position1) === letter && password.charAt(position2) !== letter) || (password.charAt(position1) !== letter && password.charAt(position2) === letter)) {
            letterMatches++;
        }
    }
    return letterMatches;
}