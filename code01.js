// JUNE 2022

import fetch from 'node-fetch';

function likes(names) {
  //takes in array of names
  //if array is empty, return: "no one likes this"
  //if arr.length is 1, return: arr[0] + " " + "likes this"
  //if arr.length is 2, return: arr[0] + " " +  "and" + " " + arr[1] + " " + "like this"
  //if arr. length is 3, return: arr[0]+ "," + " " + arr[1] + " " +  "and" + " " + arr[2] + " " + "like this"
  //if arr.length is 4+, return: arr[0]+ "," + " " + arr[1] + " " +  "and" + " " + (arr.length-2) + " " + "others like this"

  //some questions:
  //will the array contain only strings?
  //how do I handle the non-string values in the array? Filter them out? Replace them?


  if (names.length === 0){
      console.log('no one likes this')
  } else if (names.length === 1) {
      console.log(`${names[0]} likes this`)
  } else if (names.length === 2){
      console.log(`${names[0]} and ${names[1]} like this`);
  } else if (names.length === 3){
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  } else if (names.length > 3){
      console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`)
  }

}

// likes([])
// likes(["keech"]);
// likes(["keech", "poozh"]);
// likes(["keech", "poozh", "cecee"]);
// likes(["keech", "poozh", "cecee", "pij", "chook", "woo"]);


// let arr = [];
// let v2 = arr.push(7);

// console.log(arr)
// console.log(v2)



async function getDeck(){
  try {
    let response = await fetch(  //** 
      "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    );
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    // console.log(response);  // this logs a 'raw' Response object 
    const result = await response.json();
     console.log(result); 
  } catch (err) {
    console.log(err);
     }

}

//** Encountered an error "fetch is not defined". Found the solution here: https://everythingfla.com/javascript-fetch-is-not-defined/

getDeck()
