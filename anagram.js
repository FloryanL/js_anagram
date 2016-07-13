//
// This is only a SKELETON file for the "Anagram" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function (words) {
//
// YOUR CODE GOES HERE
//

Anagram.prototype.matches = function (words) {
  // YOUR CODE GOES HERE

  var matches, subject, i;
  matches = ['hello', 'world', 'zombies', 'pants'];
  subject = new Anagram('diaper');

  function tabl(matches) {
    string = matches.toLowerCase();  /*mettre en minuscule */
    string = matches.sort();   /*trie les éléments d'un tableau dans l'ordre croissant */
    //string = matches.length; 
  }
  for (i = 0; i > string.length; i++) {
    tabl[i] = Math.random() + string.charAt(i);
  }
  return result;
};

}
