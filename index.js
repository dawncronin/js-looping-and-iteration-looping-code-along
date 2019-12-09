// Code your solutions in this file

function writeCards(names) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}`)
    };
    return arr
};