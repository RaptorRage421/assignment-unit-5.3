console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// setting up a blank collection
let myCollection = [];

// creating a new function 'addToCollection', with input variables 
// collection, title, artist, and yearPublished
// 
//make a function where the collection input becomes an album object with a stored title, artist and yearPublished


function addToCollection(collection, title, artist, yearPublished) {
  collection.push({artist, title, yearPublished})
  return collection[5];
}




addToCollection(myCollection, 'Angel On My Shoulder', 'Kaskade', '2008');
addToCollection(myCollection, 'Move for Me', 'Kaskade', '2008');
addToCollection(myCollection, 'The Longest Road', 'Morgan Page', '2008');
addToCollection(myCollection, 'Lose This Feeling (Dimenion Remix)', 'Armin van Buuren, Demension', '2023');
addToCollection(myCollection, 'Wasted Youth (Original Mix)', 'goddard.' + ', ' + 'CatBurns', '2024');
addToCollection(myCollection, 'Toxic (Phibes Remix)', 'Songer', '2024');
addToCollection(myCollection, "Vibin'", 'Kide (IT)', '2024');
addToCollection(myCollection, 'Tell Me Why (1991 Remix)', 'Supermode', '2023');
addToCollection(myCollection, 'DLMD (Original Mix)', 'Darren Styles, ', 'TNT', '2024');
console.log(myCollection)
// function empty() {
//   myCollection.length = 0;
//   return 'Emptied the Collection';
// }

function showCollection(collection){
  for (i=0; i<collection.length; i++){
  console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
//console.log(collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);  
}
return collection
  
}

function findByArtist(collection, artist) {
  
 let newArray = [];
 for (i = 0; i<collection.length; i++){

 if (collection[i].artist === artist){
  newArray.push(collection[i])
 }
 } 
  return newArray;
}

console.log('Testing Find Artist:', findByArtist(myCollection, 'Kaskade'));
console.log('Testing showCollection: ', showCollection(myCollection));



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
