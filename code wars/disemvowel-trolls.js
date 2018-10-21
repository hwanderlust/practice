/*
  remove all vowels from input string
  "This website is for losers LOL!" => "Ths wbst s fr lsrs LL!"
 */

const input = "This website is for losers LOL!"

console.log(input.match(/[^aeiouAEIOU]/g));
