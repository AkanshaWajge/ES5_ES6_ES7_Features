//Unicode in Regex
//Unicode aware regex.

var string = 'foo𝌆bar';
var match = string.match(/foo(.)bar/u);
console.log(match[1]);
//'𝌆'

