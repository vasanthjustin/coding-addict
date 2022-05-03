const lodash = require('lodash')

const items = [1, [2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];
const newItems = _.flaterDeep(items)
console.log(newItems);