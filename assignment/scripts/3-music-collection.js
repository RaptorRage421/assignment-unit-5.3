console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// setting up a blank collection
let myCollection = [];
let tracks = [];
// creating a new function 'addToCollection', with input variables 
// collection, title, artist, and yearPublished
// 
//make a function where the collection input becomes an album object with a stored title, artist and yearPublished


function addToCollection(collection, title, artist, yearPublished,trackers) { //...[track,duration]
  let addHelper = {};
  tracker = [];
  //tracks = [track, duration];
  tracker = trackers;
  for (i=0;i<collection.length;i++){
    //console.log('hi', collection[i].title)
    if (collection[i].title === title ){
      //&& collection[i].artist === artist && collection[i].yearPublished === yearPublished && typeof trackers === 'array'){
      //tracker.tracks.push = tracker;
      addHelper.tracks = tracker;
      // console.log('HI! ', addHelper)
      collection[i].tracks.splice(2, 0,trackers);
    // if (collection[i].title === title) {
    
 //tracker.push(trackers[i]);

      
  //     addHelper = collection[i];
  //     tracker.push(trackers);
  //     addHelper.tracks = tracker;
      
     return;
    }
  
  }
  console.log('in addToCollection');
  addHelper.title = title;
  addHelper.artist = artist;
  addHelper.yearPublished = yearPublished;
  addHelper.tracks = [tracker];
  collection.push(addHelper);
  return addHelper;
  
  
  
  // collection.push({title, artist, yearPublished, tracks});
  
  // return collection[5];
  // collection.push({artist, title, yearPublished, tracks});
  //console.log(myCollection);
  //return collection[5];        i know this code works, but i don't understand it..
  //                             which is why i commented it out and made it my old way. 
  //                             just with better understanding of the code and project. 
}




addToCollection(myCollection, 'Strobelite Seduction', 'Kaskade', '2008', ['Move For Me', '3:57']); // move for me 3:57 / Angel on My Shoulder 3:47 / I Remember (Strobelite Edit) 4:43
addToCollection(myCollection, 'Strobelite Seduction', 'Kaskade', '2008', ['Angel on My Shoulder', '3:47']);
addToCollection(myCollection, 'Strobelite Seduction', 'Kaskade', '2008',['I Remember (Strobelite Edit)', '4:43'] );
addToCollection(myCollection, 'Nettwerk Music Group', 'Morgan Page', '2014', ['In The Air', '7:06']); 
addToCollection(myCollection, 'Nettwerk Music Group', 'Morgan Page', '2014', ['Against the World', '6:26'])// In The Air feat Angela McCluskey Extended Mix 7:06 / Against the World Original Mix 6:26 
addToCollection(myCollection, 'Armada Music', 'Armin van Buuren', '2023', ['Lose This Feeling (Dimension Remix)', '3:52']);
addToCollection(myCollection, 'Armada Music', 'Armin van Buuren', '2023',['Lose This Feeling (Maddix Remix)', '4:43']);
addToCollection(myCollection, 'Armada Music', 'Armin van Buuren', '2023',['Make It Count', '5:04']);   // Lose This Feeling (Dimenion Remix) 3:52 / Lose This Feeling (Maddix Extended Remix) 4:43 / Make It Count 5:04
addToCollection(myCollection, 'Atlantic Records UK', 'goddard.', '2024', ['Wasted Youth (Original Mix)', '2:27']); 
addToCollection(myCollection, 'Atlantic Records UK', 'goddard.', '2024', ['Wasted Youth [IVY] Remix', '3:09']);// Wasted Youth feat. CatBurns (Original Mix) 2:27 / Wasted Youth feat. CatBurns [IVY] Remix 3:09
addToCollection(myCollection, 'Rave Room Recordings', 'Kide (IT)', '2024', ["Vibin'", '4:10']);  //Vibin' 4:10
addToCollection(myCollection, 'Axtone Records', 'Supermode', '2023', ['Tell Me Why (1991 Remix)', '4:04']); // Tell Me Why (1991 Remix) 4:04

console.log(myCollection)
// function empty() {
//   myCollection.length = 0;
//   return 'Emptied the Collection';
// }

function showCollection(collection) {
  for (i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}: `);

    //console.log(collection[i].title + ' by ' + collection[i].artist + ' published in ' + collection[i].yearPublished);  
  }
  return collection

}

function findByArtist(collection, artist) {

  let newArray = [];
  for (i = 0; i < collection.length; i++) {

    if (collection[i].artist === artist) {
      newArray.push(collection[i])
    }
  }
  return newArray;
}

console.log('Testing Find Artist:', findByArtist(myCollection, 'Kaskade'));
console.log('Testing showCollection: ', showCollection(myCollection));

// stretch goal: search function to search against artist and yearPublished
function search(collection, searchCriteria ){
  //console.log('in search');
  let searchArray = [];
  let searchObject = {};
  if (typeof searchCriteria !== 'object' || searchCriteria.yearPublished === undefined || searchCriteria.artist === undefined || searchCriteria === undefined || searchCriteria.artist.length === 0 || searchCriteria.yearPublished.length === 0){
    console.log('input parameters are: ' ,searchCriteria);
    return collection;
  }
 else {for (i=0; i<collection.length; i++){
  
      if (searchCriteria.artist === collection[i].artist && searchCriteria.yearPublished === collection[i].yearPublished){
        searchObject = collection[i];
        searchArray.push(searchObject);
        
      }
      
  }
  console.log('input parameters are: ', searchCriteria);
  return searchArray;
}
}
 

  // for (i = 0; i<collection.length; i++) {
  //   //if (collection[i].artist === searchCriteria || collection[i].yearPublished = searchCriteria) {
  // searchArray.push(collection[i])

  //   }
  //   return searchArray;
  // }




console.log('Search Test - Testing good search: ', search(myCollection, {artist:'Kaskade',yearPublished:'2008'}));
console.log('Search Test - Testing good search: ', search(myCollection, {artist:'Songer',yearPublished:'2024'}));

console.log('Search Test - Testing no artist only year: ', search(myCollection, {yearPublished:'2024'}));
console.log('Search Test: - Testing incorrect date: ', search(myCollection, {artist:'Songer', yearPublished:'2020'}));
console.log('Search Test: - Testing no input criteria: ', search(myCollection));
console.log('Search Test: - empty artist string', search(myCollection, {artist:'', yearPublished:'2020'}));
console.log('Search Test - not an object(number): ', search(myCollection, 2008 ));
console.log('Search Test - not an object(string): ', search(myCollection, '2008' ));
//console.log('Search Test: ', search(myCollection));

console.log(myCollection[0].tracks[2][1])


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
