console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// setting up a blank collection
const myCollection = [];

// creating a new function 'addToCollection', with input variables 
// collection, title, artist, and yearPublished
// 
function addToCollection(collection, title, artist, yearPublished) {
  
  let album = collection;
  collection = {};
  collection.collection = album;
  //console.log('Album: ' , album);
  collection.title = title;
 // console.log('Title: ', title);
  collection.artist = artist;
 // console.log('Artist: ', artist)
  collection.yearPublished = yearPublished;
  //console.log('Year Published: ', yearPublished);
  
  myCollection.push(collection);
  return myCollection;
}
function empty() {
  myCollection.length = 0;
  return 'Emptied the Collection';
}


console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Elevate', 'The Longest Road', 'Morgan Page', '2008'));

console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));






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
