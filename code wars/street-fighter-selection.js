function streetFighterSelection(fighters, position, moves){
  const hoveredFighters = []

  if(moves.length === 0) { console.log(hoveredFighters); return hoveredFighters }

  let currentPosition = {}
  currentPosition.x = position[0]
  currentPosition.y = position[1]

  moves.forEach(move => {

      if(move === 'up') {
        if(currentPosition.y !== 0) {
          currentPosition.y--
        }
      }

      if(move === 'down') {
        if(currentPosition.y !== 1) {
          currentPosition.y++
        }
      }

      if(move === 'left') {
        if(currentPosition.x !== 0) {
          currentPosition.x--
        } else {
          currentPosition.x = fighters[0].length - 1
        }
      }

      if(move === 'right') {
        if(currentPosition.x !== fighters[0].length - 1) {
          currentPosition.x++
        } else {
          currentPosition.x = 0
        }
      }

    hoveredFighters.push(fighters[currentPosition.y][currentPosition.x])
  })

  console.log(hoveredFighters);
  return hoveredFighters
}

fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

let moves;

moves = ['up', 'left', 'right', 'left', 'left'];
streetFighterSelection(fighters, [0,0], moves) //=>,['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']);

moves = [];
streetFighterSelection(fighters, [0,0], moves) //=> ,[]);

moves = ["left","left","left","left","left","left","left","left"];
streetFighterSelection(fighters, [0,0], moves) //=> ,['Vega', 'Balrog', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Vega', 'Balrog']);

moves = ["right","right","right","right","right","right","right","right"];
streetFighterSelection(fighters, [0,0], moves) //=> ,['E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega', 'Ryu', 'E.Honda', 'Blanka']);

moves = ["up","left","down","right","up","left","down","right"];
streetFighterSelection(fighters, [0,0], moves) //=> ,['Ryu', 'Vega', 'M.Bison', 'Ken', 'Ryu', 'Vega', 'M.Bison', 'Ken']);

moves = ["down","down","down","down"];
streetFighterSelection(fighters, [0,0], moves) //=> , ['Ken', 'Ken', 'Ken', 'Ken']);

moves = ["up","up","up","up"];
streetFighterSelection(fighters, [0,0], moves) //=> , ['Ryu', 'Ryu', 'Ryu', 'Ryu']);
