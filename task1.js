const input = '123';

function myParseInt(value) {
    const isNegative = value.charAt(0) === '-';
    isNegative && (value = value.slice(1));

    let num = 0;
    for (let i = 0; i < value.length; i++) {
        const digit = value.charCodeAt(i) - 48;
        if (digit < 0 || digit > 9) {
            return NaN;
        }

        num = num * 10 + digit;
    }

    return isNegative ? -num : num;
}

console.log({
    input,
    output: myParseInt(input),
});
