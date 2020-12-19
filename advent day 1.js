const fs = require('fs');
const array = fs.readFileSync('Advent Challenges Completed/input1.txt', {encoding: 'utf-8'}).split('\n').map(n => +n);

    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) { 
            for (let k = 2; k < array.length; k++) {
                let product = array[i] + array[j] + array[k];
                if (product === 2020) {
                    console.log(array[i], array[j], array[k]);
                }
            }
        }
    }