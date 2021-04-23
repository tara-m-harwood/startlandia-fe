let initSpaces = () => {
  let spaces = Array(12).fill({top: '', bottom:'', leftLower:'', rightLower:'', className:'', isEmpty: true })

  for(let i=0; i<spaces.length; i++){
    spaces[i] = {top: '', bottom:'open', leftLower:'', rightLower:'', className: 'board-space outer', isEmpty: true }
  }

  spaces[0] = {top: 'Startlandia', bottom:'~ rest here ~', leftLower:'', rightLower:'', 
               className: 'board-space outer startlandia', isEmpty: false}
  spaces[5] = {top: 'switch player', bottom:'🦋', leftLower:'', rightLower:'',
               className: 'board-space inner switch', isEmpty: false }
  spaces[6] = {top: 'roll dice', bottom:'*', leftLower:'', rightLower:'',
               className: 'board-space inner dice', isEmpty: false }
  console.log(spaces)             
  return spaces;
}

// let getActionRule = () =>  {
//   return prompt("action rule", "draw a monster")
// }

// let getMovementRule = () =>  {
//   return prompt("movement rule", "2 spaces forward")
// }

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

    switchPlayer: (G, ctx) => {
      ctx.currentPlayer==="0" ? G.spaces[5].bottom = "🦄" : G.spaces[5].bottom = "🦋"
      ctx.events.endTurn();
    },

    occupySpace: (G, ctx, id) => {
      ctx.currentPlayer==="0" ? G.positions.player1 = id : G.positions.player2 = id
    },

    fillSpace: (G, ctx, id) => {
      // G.spaces[id].top = getActionRule(id);
      // G.spaces[id].bottom = getMovementRule(id);
      G.spaces[id].isEmpty = false;
    },

    getRules: (G, ctx, id) => {
      G.spaces[id].top = "draw a monster"
      G.spaces[id].bottom = "2 spaces forward"
    }

  },

};

export default Startlandia;
