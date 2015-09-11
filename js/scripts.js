var findReplace = function(string, search, newWord) {
  var newString= string.split(' ');

  for(var i = 0; i <newString.length; i++ ) {
  	if (newString[i] === search) {
  	newString[i] = newWord;
    }  
  }
  return newString.join(" ");
};
