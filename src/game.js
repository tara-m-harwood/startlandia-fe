let initSpaces = () => {
  let spaces = Array(12).fill({top: '', bottom:'', leftLower:'', rightLower:'' })
  // let i = 0;
  // spaces[i] = {top: 'A', bottom:'A', leftLower:'A', rightLower:'A' }
  // spaces[i+1] = {top: 'B', bottom:'B', leftLower:'B', rightLower:'B' }

  for(let i=0; i<spaces.length; i++){
    spaces[i] = {top: '', bottom:'blank', leftLower:'', rightLower:'' }
  }
  spaces[0] = {top: '', bottom:'Startlandia', leftLower:'', rightLower:'' }
  spaces[5] = {top: 'end turn', bottom:'', leftLower:'', rightLower:'' }
  spaces[6] = {top: 'roll dice', bottom:'', leftLower:'', rightLower:'' }
  return spaces;
}

let promptUser = () =>  {
  return prompt("action rule", "draw a monster")
}

const Startlandia = {
  name: "startlandia",

  setup: () => ({
    spaces: initSpaces(),
    positions: {
      player1: 0,
      player2: 0,
    }
  }),

  moves: {
    rollDie: (G, ctx) => {
        G.dieRoll = ctx.random.D6();
        G.spaces[6].bottom = G.dieRoll;
    },

    clickCell: (G, ctx, id) => {
      for(let i=0; i<G.spaces.length; i++){
        G.spaces[i].leftLower =''
      }
      G.spaces[id].leftLower = ctx.currentPlayer

      if(id===0){
        alert("You have reached Startlandia!")
      } else if (id===5){
        ctx.events.endTurn();
      } else if (id===6){
        G.dieRoll = ctx.random.D6();
        G.spaces[6].bottom = G.dieRoll;
      } else {
        G.spaces[id].bottom = promptUser(id);
      }
    
      if(ctx.currentPlayer===0){
        G.positions.player1 = id
      } else {
        G.positions.player2 = id
      }
    },
  },  


  // turn: { moveLimit: 1 },

  // endIf: (G, ctx) => {
  //   if (IsVictory(G.cells)) {
  //     return { winner: ctx.currentPlayer };
  //   }
  //   if (G.cells.filter(c => c === null).length === 0) {
  //     return { draw: true };
  //   }
  // },

  // ai: {
  //   enumerate: G => {
  //     let moves = [];
  //     for (let i = 0; i < 9; i++) {
  //       if (G.cells[i] === null) {
  //         moves.push({ move: "clickCell", args: [i] });
  //       }
  //     }
  //     return moves;
  //   }
  // }
};

export default Startlandia;
