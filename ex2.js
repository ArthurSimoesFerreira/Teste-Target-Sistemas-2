function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

let str = prompt("Digite uma string:");
let occurrences = countLetterA(str);

if (occurrences > 0) {
    console.log(`A letra 'a' apareceu ${occurrences} vezes.`);
} else {
    console.log("A letra 'a' não foi encontrada.");
}
