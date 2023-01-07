const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';

    for (let pos = 0; pos < expr.length; pos += 10) {
        res += getCharFromCode(expr.slice(pos, pos + 10));
    }

    return res;
}

function getCharFromCode(code) {
    if (code === '**********') return ' ';

    let symString = '';
    for (let i = 0; i < 10; i += 2) {
        const symbol = code.slice(i, i + 2);
        if (symbol === '00') continue;
        if (symbol === '10') symString += '.';
        if (symbol === '11') symString += '-';
    }
    return MORSE_TABLE[symString];
}

module.exports = {
    decode
}