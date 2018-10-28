function staircase(n) {
  
  let output = '';
  
  for(let i=0; i < n; i++) {
    
    output = output.substring(1)
    output += '#'

    while(output.length < n - i) {
      output = ' ' + output
    }

    console.log(output);
  }
}

staircase(10)
