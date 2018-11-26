function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  //for ... in loop om source te itereren + filter
  for (let prop in source) {
  	arr = arr.concat(collection.filter(x => x[prop] === source[prop]));
  }
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));