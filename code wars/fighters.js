function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.receiveAttack = (attack) => this.health -= attack;
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    console.log(fighter2.name);
    return fighter2.name;
  } else if(fac2 < fac1) {
    console.log(fighter1.name);
    return fighter1.name;
  } else {
    console.log(firstAttacker);
    return firstAttacker;
  }
//
//   if(fighter1.name === firstAttacker) {
//     console.log(fight(fighter1, fighter2));
//   } else {
//     console.log(fight(fighter2, fighter1));
//   }
// }
//
// function fight(fighter1, fighter2) {
//   let winner;
//   while(fighter1.health > 0 || fighter2.health > 0) {
//     fighter2.receiveAttack(fighter1.damagePerAttack)
//     if(fighter2.health <= 0) {
//       winner = fighter1
//       break
//     }
//     fighter1.receiveAttack(fighter2.damagePerAttack)
//     if(fighter1.health <= 0){
//       winner = fighter2
//       break
//     }
//   }
//   return winner.name
}

declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") //=>, "Lew");
declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry") //=>, "Harry");
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry") //=>, "Harald")
declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald") //=>, "Harald")
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry") //=>, "Harald")
declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald") //=>, "Harald")
