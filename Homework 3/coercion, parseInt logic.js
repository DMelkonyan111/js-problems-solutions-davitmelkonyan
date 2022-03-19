function customParseInt(val) {
    val = val.trim().split('');
    let result = '';

    for (let i = 0; i < val.length; i++) {
        if (Number(val[i])) {
            result += val[i];
        } else {
            break;
        }
    }

    return (result != '') ? +result : NaN;
}

console.log(customParseInt('  a   '))

module.exports = {
    customParseInt
}