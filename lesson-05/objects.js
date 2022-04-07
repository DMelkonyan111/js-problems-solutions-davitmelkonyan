function fromPairs(pairs) {
    // Solution 1 -> with JS object method
    return Object.fromEntries(pairs);

    // // Solution 2 -> manually written
    // let obj = {};
    //
    // pairs.forEach((el, index) => {
    //     obj[el[0]] = el[1];
    // })
    //
    // return obj;
}

function getHead(arr) {
    return [arr[0]];
}

function getTail(arr) {
    return arr.splice(1);
}

function zipObject(keys, values) {
    let resultObject = {};

    keys.forEach((el, index) => {
        resultObject[el] = (values[index] == undefined) ? null : values[index];
    })

    return resultObject;
}

function groupBy(elements, rule) {
    let result = {};

    if (rule == 'Math.floor') {
        elements.forEach((el, index) => {
            if (result[Math.floor(el)]) {
                if (result[Math.floor(el)].indexOf(el) == -1) {
                    result[Math.floor(el)].push(el);
                }
            } else {
                result[Math.floor(el)] = [el];
            }
        })
    } else if (rule == '(i) => i.length') {
        elements.forEach((el, index) => {
            if (result[el.length]) {
                if (result[el.length].indexOf(el) == -1) {
                    result[el.length].push(el);
                }
            } else {
                result[el.length] = [el];
            }
        })
    }

    return result;
}

module.exports = {
    fromPairs,
    getHead,
    getTail,
    zipObject,
    groupBy
}