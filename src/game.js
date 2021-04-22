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
    positions: {
      player1: 0,
      player2: 0,
    },
    spaces: initSpaces(),
  }),

  moves: {
    rollDie: (G, ctx) => {
        G.dieRoll = ctx.random.D6();
        G.spaces[6].bottom = G.dieRoll;
    },

    clickCell: (G, ctx, id) => {

      if(id!==5 && id!==6){
        ctx.currentPlayer==="0" ? G.positions.player1 = id : G.positions.player2 = id
      }   

      if (id===5){
        ctx.events.endTurn();
      } else if (id===6){
        G.dieRoll = ctx.random.D6();
        G.spaces[6].bottom = G.dieRoll;
      } else if (id!==0 && G.spaces[id].bottom==='blank'){
        G.spaces[id].bottom = promptUser(id);
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
