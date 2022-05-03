const {
    readFileSync,
    writeFileSync,
} = require('fs');

console.log('Start the task');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Thomas Alva Edison was an American inventor and businessman. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures ${first} ${second}`, {
    flag: 'a'
})

console.log('Done with the task');
console.log('Starting the next task');