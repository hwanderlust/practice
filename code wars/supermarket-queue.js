/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

The function has two input variables:

customers: an array (list in python) of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
The function should return an integer, the total time required.

EDIT: A lot of people have been confused in the comments. To try to prevent any more confusion:

There is only ONE queue, and
The order of the queue NEVER changes, and
Assume that the front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.
The diagram on the wiki page I linked to at the bottom of the description may be useful.
 */

 function queueTime(customers, n) {
   let totalWaitTime = 0;

   if(n <= 0) {
     console.log(`no cashiers`);
     return 'no cashiers'
   } else if(customers.length <= 0) {
     console.log(0);
     return 0
   } else if(n > customers.length) {
     console.log(Math.max(...customers));
     return Math.max(...customers)
   } else if(n === 1) {
     console.log(customers.reduce((sum, num) => sum + num));
     return customers.reduce((sum, num) => sum + num)
   } else if(n >= 2) {
     if(customers.length >= 2) {
       const tills = {}
       for(let i=0; i < n; i++) {
         tills[i+1] = customers[i]
       }

       let nextTill;
       for (let i = n; i < customers.length; i++) {
         for(let till in tills) {
           if(tills[till] === Math.min(...Object.values(tills))) {
             nextTill = till
             break
           }
         }
         tills[nextTill] += customers[i]
       }

       console.log(Math.max(...Object.values(tills)));
       return Math.max(...Object.values(tills))
     }
   }
 }


 // queueTime([], 1) //=> 0
 // queueTime([5,3,4], 1) //=> 12
 // queueTime([10,2,3,3], 2) //=> 10
 // queueTime([2,3,10], 2) //=> 12
 // queueTime([1,8,10,5,3], 2) //=> 14
 // queueTime([1,2,3,4,5], 100) //=> 5
 queueTime([8,5,17,17,15,10,4,8,9,2], 13) //=> 17

 // queueTime([34,45,38,14,40,29,43,1,48,21,23,31,20,6,30,6,32,25,9,48,27,37,36], 6) //=> 123
 // queueTime([7,24,50,10,39,48,11,9,43,20,43], 5) //=> 82
 // queueTime([38,9,49,24,49,7,49,26,43,31,4,9,28,41,47,45,38,38,34,27,25,33,37,29,33,3,4,39], 6) //=> 162
 // queueTime([21,20,11,8,5,4,38,23,45,42,38,9,37,21,26,22,17], 6) //=> 73
 // queueTime([44,20,40,43,45,1,15,39,5,26,46,44], 6) //=> 87
 // queueTime([36,24,5,29,28,34,4,26,35,24,12,3,41,8,15], 5) //=> 83
 // queueTime([48,49,26,47,42,49,49,31,17,26], 4) //=> 106
 // queueTime([10,18,42,28,4,10,12,7,38,2,38,15,23,33,26,50,9,12,41,8,32,37,15,8,33,4,45,30,26], 3) //=> 230
 // queueTime([13,28,24,15,48,45,49,3,41,30,41,44,7,36,19,24,5,15,34,32,14,46], 4) //=> 175
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 6) //=> 1206
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 6) //=> 1005
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 6) //=> 603
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 6) //=> 1608
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 10) //=> 603
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 6) //=> 804
 // queueTime([201,201,201,201,201,201,201,201,201,201], 4) //=> 603
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 5) //=> 1608
 // queueTime([201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201,201], 9) //=> 603

/*
  --------------------------------BEST
  function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
  let idx = w.indexOf(Math.min(...w));
  w[idx] += t;
  }
  return Math.max(...w);
  }
 */
