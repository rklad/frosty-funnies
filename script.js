let adjective = prompt('Enter an adjective:');
let person = prompt('Enter a person\'s name:');
let plural = prompt('Enter a plural noun:');
let noun = prompt('Enter a noun:');
let past = prompt('Enter a past tense verb:');
let plural2 = prompt('Enter another plural noun:');
let plural3 = prompt('Enter another plural noun:');
let verb = prompt('Enter a verb:');
let adjective3 = prompt('Enter another adjective:');
let verb2 = prompt('Enter another verb:');
let adjective4 = prompt('Enter another adjective:');
let noun2 = prompt('Enter another noun:');




let story = `On a very ${adjective} Christmas Eve morning, ${person} was preparing his entire house for all his ${plural} to come over later that night and celebrate the holidays together. He got out of his ${noun} and ${past} with pure jolliness! He was so excited for everyone to come over that he began hanging up the ${plural2} above the mantle and started cooking all of his favorite ${plural3}. Unfortunately, he was a little too excited because he accidentally put the ${plural2} in the oven and hung the ${plural3} above the mantle. He started to ${verb} out, but then, he heard a ${adjective} noise coming from his firepit. It was none other than Santa Claus himself! Santa began to ${verb2} around the house, fixing all of ${person}'s problems. He hung the ${plural2} above the mantle, right where they belong and cooked the ${plural3} with perfection! All was fixed for the night. As Santa left, he dropped a large present underneath the Christmas tree. Intrigued, ${person} walked over to it and decided to open it up. After ripping off all of the wrapping paper, he opened the box and inside the box, he found a ${adjective4} ${noun2}!`

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`