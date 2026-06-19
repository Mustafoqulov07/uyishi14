function runSequentially(tasks) {
    let results = [];

    let chain = Promise.resolve();

    tasks.forEach(task => {
        chain = chain.then(() => {
            return task().then(result => {
                results.push(result);
            });
        });
    });

    return chain.then(() => results);
}

const tasks = [
    () => new Promise(r => setTimeout(() => r(1), 3000)),
    () => new Promise(r => setTimeout(() => r(2), 1000)),
    () => new Promise(r => setTimeout(() => r(3), 2000)),
];

runSequentially(tasks).then(console.log);