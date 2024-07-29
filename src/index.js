module.exports = function toReadable(number, result = '') {
        const numerals = {
            '0': 'zero',
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six',
            '7': 'seven',
            '8': 'eight',
            '9': 'nine',
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '15': 'fifteen',
            '18': 'eighteen',
            '20': 'twenty',
            '30': 'thirty',
            '40': 'forty',
            '50': 'fifty',
            '80': 'eighty'
        };

        if (numerals[`${number}`]) {
            result += `${numerals[number]}`;
            return result;
        } else if (number < 20) {
            result += `${numerals[number.toString()[1]]}teen`;
            return result;
        } else {
            switch (number.toString().length) {
                case 2:
                    if (number % 10 === 0) {
                        result += `${numerals[number.toString()[0]]}ty`;
                        return result;
                    } else if (numerals[`${number.toString()[0]}0`]) {
                        result += `${numerals[`${number.toString()[0]}0`]} `;
                    return toReadable(number % 10, result);
                } else {
                    result += `${numerals[number.toString()[0]]}ty `;
                    return toReadable(number % 10, result);
                }
                break;
            case 3:
                if (number % 100 === 0) {
                    result += `${numerals[number.toString()[0]]} hundred`;
                    return result;
                } else {
                    result += `${numerals[number.toString()[0]]} hundred `;
                    return toReadable(number % 100, result);
                }
                break;
        }
    }
}