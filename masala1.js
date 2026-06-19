function mostFrequentChar (str) {
    let a = new Map();
    let maxChar = '';
    let maxCount = 0;
    for (let i of str) {
        if (i === " ")continue;
        a.set(i, (a.get(i) || 0) + 1)
        
        if (a.get(i) > maxCount) {
            maxCount = a.get(i);
            maxChar = i;
        }
    }
    
    return {
        char: maxChar,
        count: maxCount
    };
}

console.log(mostFrequentChar('Jahongir Mustafoqulof'));

