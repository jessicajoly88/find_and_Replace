var findReplace = function(string, search, newWord) {  
  var newString = string.split(' ');

  for(var i = 0; i <newString.length; i++ ) {
  	if (newString[i] === search) {
  	newString[i] = newWord;
    }  
  }
  return newString.join(" ");
};

$(document).ready(function() {
  $('form#find_replace').submit(function(event) {
  	var string = ($("input#string").val());
  	var search = ($("input#search").val());
  	var newWord = ($("input#newWord").val());
  	var result = findReplace(string,search,newWord);

  $(".newSentence").text("");
  $(".newSentence").text(result);
  
  $("#result").show();
    event.preventDefault();	
  });
});

