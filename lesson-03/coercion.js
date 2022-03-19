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


function customParseFloat(val) {
    val = val.trim().split('');
    let result = '';
    let dot = false;

    for (let i = 0; i < val.length; i++) {
        if (Number(val[i])) {
            result += val[i];
        } else if (val[i] == '.' && !dot) {
            result += val[i];
            dot = true;
        } else {
            break;
        }
    }

    return (result == '') ? NaN : +result;
}

module.exports = {
    customParseFloat,
    customParseInt
}
