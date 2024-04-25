console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// setting up a blank collection
const myCollection = [];

// creating a new function 'addToCollection', with input variables 
// collection, title, artist, and yearPublished
// 
function addToCollection(collection, title, artist, yearPublished) {
  let primesCollection = {};
  primesCollection.album = collection;
  //console.log('Album: ' , album);
  primesCollection.title = title;
 // console.log('Title: ', title);
  primesCollection.artist = artist;
 // console.log('Artist: ', artist)
  primesCollection.yearPublished = yearPublished;
  //console.log('Year Published: ', yearPublished);
  
  myCollection.push(primesCollection);
  console.log(primesCollection)
  return primesCollection;
}
function empty() {
  myCollection.length = 0;
  return 'Emptied the Collection';
}

function showCollection(myCollection){
  for (i=0; i<myCollection.length; i++){
  console.log(`${myCollection[i].title} by ${myCollection[i].artist}, published in ${myCollection[i].yearPublished}`);
  }
  
}

console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Elevate', 'The Longest Road', 'Morgan Page', '2008'));

console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Strobelite Seduction', 'Angel On My Shoulder', 'Kaskade', '2008'));
console.log(addToCollection('Tell Me Why', 'Tell Me Why (1991 Remix)', 'Supermode', '2023'));

console.log('Testing showCollection: ' , showCollection(myCollection));



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
