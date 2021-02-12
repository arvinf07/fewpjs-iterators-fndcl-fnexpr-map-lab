const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(toTitleCase)
}
//   return tutorials
// })

function toTitleCase(sentence){
  let newSentence = sentence.split(' ')
  newSentence = newSentence.map((word) => {
    if (word.charAt(0) === word.charAt(0).toUpperCase()){
      return word
    }else{
      return word.charAt(0).toUpperCase() + word.slice(1)
    }
  })
  return newSentence.join(' ')
}