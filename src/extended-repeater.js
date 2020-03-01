module.exports = function repeater(str, options) {
    let result = '';
    const parametrs = {
        string: str + '',
        repeatTimes: options.repeatTimes || 1,
        separator: options.separator || '+',
        addition: (options.addition === undefined) ? '' : options.addition + '',
        additionRepeatTimes: options.additionRepeatTimes || 1,
        additionSeparator: options.additionSeparator || '|'
    }

    const { string, repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = parametrs;

    for (let i = repeatTimes; i > 0; i--) {
        result += string;
        for (let j = additionRepeatTimes; j > 0; j--) {
            result += addition;
            if (j > 1) result += additionSeparator;
        }
        if (i > 1) result += separator;
    }

    return result;
}
