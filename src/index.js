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
    let result = "";
    function convert(symbol){
        let buf = "";
        for (let index = 0; index < symbol.length; index+=2) {
            if (symbol.slice(index, index + 2) == "10") {buf += ".";}
            if (symbol.slice(index, index + 2) == "11") {buf += "-";}
        }
        return buf;
    }
    for (let index = 0; index < expr.length; index+=10) {
        if(expr.slice(index, index + 10)[0] == "*"){
            result += " ";
        }
        else{
            result += MORSE_TABLE[convert(expr.slice(index, index + 10))];
        }
    }
    return result;
}
module.exports = {
    decode
}