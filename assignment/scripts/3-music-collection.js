console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {

  collection = {};
  collection.title = title;
  console.log('Title: ', title);
  collection.artist = artist;
  console.log('Artist: ', artist)
  collection.yearPublished = yearPublished;
  console.log('Year Published: ', yearPublished);
  myCollection.push(collection);
  return myCollection
}

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
