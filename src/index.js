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
    var arrayInString = [];
    var result = '';
        
    for (var i = 0, j = 0; i < expr.length; i += 10, j += 1) { 
        var answer = expr.slice(i, i + 10);
        arrayInString[j] = [];
            
        for (var counter = 0; counter < answer.length; counter += 2) {
            arrayInString[j].push(answer.substr(counter, 2));
        }
    }
        
    for (var i = 0; i < arrayInString.length; i += 1) {
        var newString = '';
            
        for (var counter = 0; counter < arrayInString[i].length; counter += 1) {
            if (arrayInString[i][counter] === '00') {
                newString += '';
            } else if (arrayInString[i][counter] === '10') {
                newString += '.';
            } else if (arrayInString[i][counter] === '11') {
                newString += '-';
            } else if (arrayInString[i][counter] = '**********') {
                newString += ' ';
            }
        }
        
        if (!MORSE_TABLE[newString]) {
           result += ' ';
        } else {
            result += MORSE_TABLE[newString];
        }
        
    }
        
    return result;
    
}
  
module.exports = {
    decode
}