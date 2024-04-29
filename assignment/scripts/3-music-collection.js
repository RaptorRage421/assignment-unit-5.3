console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// setting up a blank collection
let myCollection = [];

// creating a new function 'addToCollection', with input variables 
// collection, title, artist, and yearPublished
// 
//make a function where the collection input becomes an album object with a stored title, artist and yearPublished

/*
added new input trackers, this should always be an array. i have tried to break it down to [name, duration],
but it seems to break part of the testing each time. will continue to play with it. 
updated the input to take name and duration separately instead of requiring an array. 
tracks are added as an object to make the .name and .duration attribute call
*/
function addToCollection(collection, title, artist, yearPublished, name, duration) { //...[track,duration]
  let addHelper = {};
  // let tracker = [];
  // let trackers = {};
  tracker = [name, duration];
  /*
  check to see if the Album already exists,
  if it does, splice the new tracks into the album in the collection
  */
  for (i = 0; i < collection.length; i++) {
    if (collection[i].title === title) {
      //addHelper.tracks = {name: name, duration: duration};
      collection[i].tracks.splice(0, 0, { name: name, duration: duration });
      return;
    }
  }
  /*
  If the album doesn't exist yet, add all the info to addHelper object
  then push addHelper into the collection
  */
  addHelper = {};
  // tracker = trackers;
  // console.log('in addToCollection');
  addHelper.title = title;
  addHelper.artist = artist;
  addHelper.yearPublished = yearPublished;
  addHelper.tracks = [{ name: name, duration: duration }];
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


/*
actually add files to the collection
*/

addToCollection(myCollection, 'Strobelite Seduction', 'Kaskade', '2008', 'Move For Me', '3:57'); // move for me 3:57 / Angel on My Shoulder 3:47 / I Remember (Strobelite Edit) 4:43
addToCollection(myCollection, 'Strobelite Seduction', 'Kaskade', '2008', 'Angel on My Shoulder', '3:47');
addToCollection(myCollection, 'Strobelite Seduction', 'Kaskade', '2008', 'I Remember (Strobelite Edit)', '4:43');
addToCollection(myCollection, 'Dynasty', 'Kaskade', '2008', 'Fire in Your Shoes', '2:39');
addToCollection(myCollection, 'Nettwerk Music Group', 'Morgan Page', '2014', 'In The Air', '7:06');
addToCollection(myCollection, 'Nettwerk Music Group', 'Morgan Page', '2014', 'Against the World', '6:26')// In The Air feat Angela McCluskey Extended Mix 7:06 / Against the World Original Mix 6:26 
addToCollection(myCollection, 'Armada Music', 'Armin van Buuren', '2023', 'Lose This Feeling (Dimension Remix)', '3:52');
addToCollection(myCollection, 'Armada Music', 'Armin van Buuren', '2023', 'Lose This Feeling (Maddix Remix)', '4:43');
addToCollection(myCollection, 'Armada Music', 'Armin van Buuren', '2023', 'Make It Count', '5:04');   // Lose This Feeling (Dimenion Remix) 3:52 / Lose This Feeling (Maddix Extended Remix) 4:43 / Make It Count 5:04
addToCollection(myCollection, 'Atlantic Records UK', 'goddard.', '2024', 'Wasted Youth (Original Mix)', '2:27');
addToCollection(myCollection, 'Atlantic Records UK', 'goddard.', '2024', 'Wasted Youth [IVY] Remix', '3:09');// Wasted Youth feat. CatBurns (Original Mix) 2:27 / Wasted Youth feat. CatBurns [IVY] Remix 3:09
addToCollection(myCollection, 'Rave Room Recordings', 'Kide (IT)', '2024', "Vibin'", '4:10');  //Vibin' 4:10
addToCollection(myCollection, 'Axtone Records', 'Supermode', '2023', 'Tell Me Why (1991 Remix)', '4:04'); // Tell Me Why (1991 Remix) 4:04

// console.log(myCollection)
// function empty() {
//   myCollection.length = 0;
//   return 'Emptied the Collection';
// }


/*
make function showCollection
to start this needs to loop through your array of objects and logs albums
with the stretch goals, there are now tracks on the albums, so we need to loop through those for each album during the loop. 
this requires a nested loop where we'll have "i" as a variable for the outerloop, and "j" as the inner variable. 
this allows us to scan through the tracks for each album, and only list the album once. 
*/
function showCollection(collection) {
  // console.log('This is my collection: ', collection)
  for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}: `);
    for (let j = 0; j < collection[i].tracks.length; j++) {
      console.log(`   ${j + 1}. NAME: ${collection[i].tracks[j].name} DURATION: ${collection[i].tracks[j].duration}`)
    }
  }
  return collection;
}

/*
function to find by artist. enter artist parameter and search through the collection for anything by that artist.
then return all the songs by that artist

*/

function findByArtist(collection, artist) {
  console.log('Find Albums by Artist: ', artist);
  let newArray = [];
  for (i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      newArray.push(collection[i])
    }
  }
  return newArray;
}
/*
some console log tests to check the functions findByArtist and showCollection
*/
console.log('Testing Find Artist:', findByArtist(myCollection, 'Kaskade'));
showCollection(myCollection)
// console.log('Testing showCollection: ', showCollection(myCollection));
/*
stretch goal: search function to search against artist and yearPublished
adding the extra stretch search for track name. adding optional parameter, to use if there, otherwise as normal
if there is a trackName, search the collection.
need a nested for loops to get to the track level in the object.
for the length of the collection, and then internally the length of the tracks attribute in that object
check to see if collection[i].tracks[j][0] === trackName
if it does searchObject gets filled with that object from collection where the title was found
that object gets pushed into an array, and returned.
*/
function search(collection, searchCriteria, trackName) {
  //console.log('in search');
  let searchArray = [];
  let searchObject = {};
  if (typeof searchCriteria === 'string' || trackName ) {
    for (let i = 0; i < collection.length; i++) {
      for (let j = 0; j < collection[i].tracks.length; j++) {
        if (collection[i].tracks[j].name === trackName || collection[i].tracks[j].name === searchCriteria) {
          console.log('Searching by song: ', trackName, searchCriteria)
          searchObject = collection[i];
          searchArray.push(searchObject);
          return searchArray;
        }
      }
    }
  }
  /*
  if searchCriteria exists, and a bunch of conditionals to fulfil the requirements of the assignment. 
  if searchCriteria is not an object, if year published is not supplied to the search, if artist is not supplied, if nothing is entered.
  return the whole collection
  */
  if (searchCriteria) {
    if (typeof searchCriteria !== 'object' || searchCriteria.yearPublished === undefined || searchCriteria.artist === undefined || searchCriteria === undefined || searchCriteria.artist.length === 0 || searchCriteria.yearPublished.length === 0) {
      console.log('Search parameters are: ', searchCriteria);
      return collection;
    }
    /*
    if the search is entered correctly, for the length of the collection, check the objects to see if the artist and yearPublished strictly match.
    if they do, set searchObject to that index of the collection, and push the object to searchArray
    return searchArray
    */
    else {
      for (i = 0; i < collection.length; i++) {

        if (searchCriteria.artist === collection[i].artist && searchCriteria.yearPublished === collection[i].yearPublished) {
          searchObject = collection[i];
          searchArray.push(searchObject);
        }
      }
      console.log('input parameters are: ', searchCriteria);
      return searchArray;
    }
  }
}



console.log('Search Test - Testing good search: ', search(myCollection, { artist: 'Kaskade', yearPublished: '2008' }));
console.log('Search Test - Testing search wrong year(expecting empty result): ', search(myCollection, { artist: 'Songer', yearPublished: '2024' }));
console.log('Search Test - Testing no artist only year: ', search(myCollection, { yearPublished: '2024' }));
console.log('Search Test: - Testing incorrect date: ', search(myCollection, { artist: 'Songer', yearPublished: '2020' }));
console.log('Search Test: - Testing no input criteria: ', search(myCollection));
console.log('Search Test: - empty artist string', search(myCollection, { artist: '', yearPublished: '2020' }));
console.log('Search Test: - no artist string', search(myCollection, { yearPublished: '2020' }));
console.log('Search Test - not an object(number): ', search(myCollection, 2008));
console.log('Search Test - not an object(string): ', search(myCollection, '2008'));
console.log('Search Test: Testing Song Name: ', search(myCollection, { artist: 'Kaskade', yearPublished: '2008' }, 'Tell Me Why (1991 Remix)'))
console.log('Search Test - song title again: ', search(myCollection, 'In The Air'));
console.log('Search Test: song title only no artist/year input: ', search(myCollection, 'Wasted Youth [IVY] Remix'))
console.log('Search Test: - no yearPublished string (expecting full collection)', search(myCollection, { artist: 'Armin van Buuren' }));


//console.log('Search Test: ', search(myCollection));

//console.log(myCollection[0].tracks[2][1])


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
