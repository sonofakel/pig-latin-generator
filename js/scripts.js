
// Business logic below -->

// Global variables
  var vowels = ["a","e","i","o","u","A","E","I","O","U"];
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","q","r","v","w","x","y","z","B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "Q", "R", "V", "W", "X", "Y", "Z"];

// Program does nothing to non-alphabetical characters, since they do not contain consonants or vowels

// Add "way" to single-letter words beginning with a vowel.

var pigLatinTranslator = function(userInput) {
  var firstChar = userInput.charAt(0);
  var secChar = userInput.charAt(1);
    for (i = 0; i < vowels.length; i++){
    if (firstChar === vowels[i]) {
      return userInput + "way";
    } else {
  for (i = 0; i < consonants.length; i++) {
  if (firstChar === consonants[i] & secChar === vowels) {
    return userInput.substring(1) + firstChar + "ay";
  } else if (secChar === consonants[i]) {
    return userInput.substring(2) + firstChar + secChar + "ay";
  }
  }
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
