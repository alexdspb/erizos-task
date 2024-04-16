let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function takeItem(matrix, row, col) {
    const cols = matrix[0].length;
    const rows = matrix.length;

    if (row < 0 || row >= rows || col < 0 || col >= cols) {
        throw new Error('Out of bounds');
    }

    return matrix[row][col];
}

/* Takes matrix elements from top left to top right and then by spiral */
function outputSpiral(matrix) {
    const cols = matrix[0].length;
    const rows = matrix.length;

    let result = [];
    let cursor = [0, 0];
    let direction = [0, 1];

    let takenItems = [];
    while (result.length < cols * rows) {
        result.push(takeItem(matrix, cursor[0], cursor[1]));
        takenItems.push(cursor.join(','));

        let nextCursor = [cursor[0] + direction[0], cursor[1] + direction[1]];
        if (nextCursor[0] < 0 || nextCursor[0] >= rows || nextCursor[1] < 0 || nextCursor[1] >= cols || takenItems.includes(nextCursor.join(','))) {
            direction = [direction[1], -direction[0]];
            nextCursor = [cursor[0] + direction[0], cursor[1] + direction[1]];
        }

        cursor = nextCursor;
    }

    return result;
}

console.log({
    input,
    output: outputSpiral(input),
});
