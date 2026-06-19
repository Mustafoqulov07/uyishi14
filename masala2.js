function daysBetween(date1, date2) {
    let sana1 = new Date(date1);
    let sana2 = new Date(date2);
    
    let a = Math.abs(sana1.getTime() - sana2.getTime());
    
    return a / (1000 * 60 * 60 * 24);

};

console.log(daysBetween("2025-01-01", "2025-01-10"));
console.log(daysBetween("2025-03-10", "2025-03-01"));