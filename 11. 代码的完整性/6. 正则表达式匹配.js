/**
 *  请实现一个函数用来匹配包括'.'和'*'的正则表达式。
 *  模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。 
 *  在本题中，匹配是指字符串的所有字符匹配整个模式。
 *  例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 */

// function match(s, pattern)
// {
//     const reg = new RegExp(`^${pattern}$`);
//     return reg.test(s);
// }


function match(s, pattern) {
    if (!s || !pattern) {
        return false
    }
    return matchCore(s, pattern, 0, 0)
}

function matchCore(s, pattern, sIndex, patternIndex) {
    if(s.length === sIndex && pattern.length === patternIndex) {
        return true
    }
    if(s.length !== sIndex && pattern.length === patternIndex) {
        return false
    }
    if(pattern[patternIndex + 1] === '*') {
        if(pattern[patternIndex] === '.' && sIndex !== s.length || pattern[patternIndex] === s[sIndex]) {
            return (
                matchCore(s, pattern, sIndex + 1, patternIndex + 2) ||
                matchCore(s, pattern, sIndex + 1, patternIndex) ||
                matchCore(s, pattern, sIndex, patternIndex + 2)
            );
        }
        return matchCore(s, pattern, sIndex, patternIndex + 2);
    }

    if(s[sIndex] === pattern[patternIndex] || pattern[patternIndex] === '.' && sIndex !== s.length) {
        return matchCore(s, pattern, sIndex + 1, patternIndex + 1);
    }
    return false;
}