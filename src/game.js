let initSpaces = () => {
  let spaces = Array(12).fill({top: '', bottom:'', leftLower:'', rightLower:'', className:'' })
  // let i = 0;
  // spaces[i] = {top: 'A', bottom:'A', leftLower:'A', rightLower:'A' }
  // spaces[i+1] = {top: 'B', bottom:'B', leftLower:'B', rightLower:'B' }

  for(let i=0; i<spaces.length; i++){
    spaces[i] = {top: 'open me', bottom:'', leftLower:'', rightLower:'', className: 'space' }
  }
  spaces[0] = {top: 'Startlandia', bottom:'~ rest here ~', leftLower:'', rightLower:'', className: 'space startlandia'}
  spaces[5] = {top: 'switch player', bottom:'🦋', leftLower:'', rightLower:'', className: 'space switch' }
  spaces[6] = {top: 'roll dice', bottom:'', leftLower:'', rightLower:'', className: 'space dice' }
  return spaces;
}

let getActionRule = () =>  {
  return prompt("action rule", "draw a monster")
}

let getMovementRule = () =>  {
  return prompt("movement rule", "2 spaces forward")
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
        ctx.currentPlayer==="0" ? G.spaces[5].bottom = "🦋" : G.spaces[5].bottom = "🦄"
      }   

      if (id===5){
        ctx.events.endTurn();

      } else if (id===6){
        G.dieRoll = ctx.random.D6();
        G.spaces[6].bottom = G.dieRoll;

      } else if (id!==0 && G.spaces[id].bottom===''){
        G.spaces[id].top = getActionRule(id);
        G.spaces[id].bottom = getMovementRule(id);
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
