console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// setting up a blank collection
const myCollection = [];

// creating a new function 'addToCollection', with input variables 
// collection, title, artist, and yearPublished
// 
function addToCollection(collection, title, artist, yearPublished) {
  let primesCollection = {};
  primesCollection.collection = collection;
  //console.log('Album: ' , collection);
  primesCollection.title = title;
  //console.log('Title: ', title);
  primesCollection.artist = artist;
  //console.log('Artist: ', artist)
  primesCollection.yearPublished = yearPublished;
  //console.log('Year Published: ', yearPublished);

  myCollection.push(primesCollection);
  return myCollection;
}
console.log(myCollection.collection)
// function empty() {
//   myCollection.length = 0;
//   return 'Emptied the Collection';
// }

function showCollection() {
  for (i = 0; i < myCollection.length; i++) {
    console.log(`${myCollection[i].title} by ${myCollection[i].artist}, published in ${myCollection[i].yearPublished}, on ${myCollection[i].collection} `);
  }
  return myCollection
}

function findByArtist(collection, artist) {


}

console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Elevate', 'The Longest Road', 'Morgan Page', '2008'));
console.log(addToCollection('Armada Music', 'Lose This Feeling (Dimenion Remix)', 'Armin van Buuren' + ', ' + 'Dimension', '2023'));
console.log(addToCollection('Atlantic Records UK', 'Wasted Youth (Original Mix)', 'goddard.' + ', ' + 'CatBurns', '2024'));
console.log(addToCollection('Relentless Records', 'Toxic (Phibes Remix)', 'Songer' + ', ' + 'Phibes', '2024'));
console.log(addToCollection('Rave Room Recordings', "Vibin'", 'Kide (IT)', '2024'));
console.log(addToCollection('Axtone Records', 'Tell Me Why (1991 Remix)', 'Supermode' + ', ' + '1991', '2023'));
console.log(addToCollection('b2s Compilations', 'DLMD (Original Mix)', 'Darren Styles' + ', ' + 'TNT', '2024'))

console.log('Testing showCollection: ', showCollection());



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
