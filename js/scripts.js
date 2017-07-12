
// Business logic below -->

// Global variables
  var vowels = ["a","e","i","o","u","A","E","I","O","U"]

// Program does nothing to non-alphabetical characters, since they do not contain consonants or vowels

// Add "way" to single-letter words beginning with a vowel.

var pigLatinTranslator = function(userInput) {
  var firstChar = userInput.charAt(0);
    for (i = 0; i < vowels.length; i++){
    if (firstChar === vowels[i]) {
      return userInput + "way";
    }
  }
}

// UI logic below -->

$(function(){
  $("#text-input").submit(function(event){
    event.preventDefault();
    var userInput = $("#plain-input").val();
    $("#output").text(pigLatinTranslator(userInput));
  });

});
