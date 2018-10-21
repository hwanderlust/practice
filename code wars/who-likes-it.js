function likes(names) {
  if(names.length) {
    if(names.length === 1) {
      console.log(`${names[0]} likes this`);
    } else if(names.length === 2) {
      console.log(`${names[0]} and ${names[1]} like this`);
    } else if(names.length === 3) {
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
    } else if(names.length > 3) {
      console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
    }
  } else {
    console.log(`no one likes this`);
  }
}

likes([]) //=> , 'no one likes this'
likes(['Peter']) //=> , 'Peter likes this'
likes(['Jacob', 'Alex']) //=> , 'Jacob and Alex like this'
likes(['Max', 'John', 'Mark']) //=> , 'Max, John and Mark like this'
likes(['Alex', 'Jacob', 'Mark', 'Max']) //=> , 'Alex, Jacob and 2 others like this'
