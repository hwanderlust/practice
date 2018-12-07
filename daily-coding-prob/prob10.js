// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

function jobScheduler(fn, n) {
  setTimeout(fn, n)
}

function testFn() {
  console.log(`hello world!`)
}

jobScheduler(testFn, 1000)