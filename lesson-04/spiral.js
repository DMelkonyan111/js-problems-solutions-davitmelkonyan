function spiral(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push([]);
    }

    let [count, firstRow, firstCol, lastRow, lastCol] = [1, 0, 0, n - 1, n - 1];

    while (firstRow <= lastRow && firstCol <= lastCol) {
        for (let i = firstCol; i <= lastCol; i++) {
            result[firstRow][i] = count;
            count++;
        }

        firstRow++;

        for (let i = firstRow; i <= lastRow; i++) {
            result[i][lastCol] = count;
            count++;
        }

        lastCol--;

        for (let i = lastCol; i >= firstCol; i--) {
            result[lastRow][i] = count;
            count++;
        }

        lastRow--;

        for (let i = lastRow; i >= firstRow; i--) {
            result[i][firstCol] = count;
            count++;
        }

        firstCol++;
    }

    return result;
}

module.exports = {
    spiral
}