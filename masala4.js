function flatten(obj, a = '', b = {}) {
    for (let i in obj) {
        let c = obj[i];
        let n = a ? a + '.' + i : i;
        if (typeof c === 'object') {
            flatten(c,n,b);
        } else {
            b[n] = c;
        }
    }
    return b;
};

console.log(flatten({ a: 1, b: { c: 2, d: { e: 3 } } }));