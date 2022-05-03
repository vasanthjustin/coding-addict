const {
    readFile,
    writeFile,
    appendFile
} = require('fs');

console.log('Start the task');

readFile('./content/first.txt', (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    const first = data;

    readFile('./content/second.txt', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        const second = data;

        appendFile('./content/result-async.txt', `Here is the result: ${first},${second}`, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            // console.log(data);
            console.log('Done with the task');
        })
    })
})
console.log('Starting the next task');