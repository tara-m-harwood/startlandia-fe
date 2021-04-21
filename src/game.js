/*
 * Copyright 2017 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

// function IsVictory(cells) {
//   const positions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];

//   const isRowComplete = row => {
//     const symbols = row.map(i => cells[i]);
//     return symbols.every(i => i !== null && i === symbols[0]);
//   };

//   return positions.map(isRowComplete).some(i => i === true);
// }

let initSpaces = () => {
  let spaces = Array(12).fill({top: '', bottom:'', leftLower:'', rightLower:'' })
  for(let i=0; i<spaces.length; i++){
    spaces[i].top = "top";
    spaces[i].bottom = "badonkdonk";
    spaces[i].leftLower = "P0";
    spaces[i].rightLower = "P1";
  }
  console.log(spaces)
  return spaces;
}

let promptUser = () =>  {
  return prompt("action rule", "draw a monster")
}

const Startlandia = {
  name: "startlandia",

  setup: () => ({
    spaces: initSpaces()
  }),

  moves: {
    rollDie: (G, ctx) => {
        G.dieRoll = ctx.random.D6();
        G.spaces[5].top = G.dieRoll
    },

    clickCell: (G, ctx, id) => {
        console.log("click", id)
        alert("Hi Tara!")
        G.spaces[id].bottom = promptUser(id)
      }    
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
