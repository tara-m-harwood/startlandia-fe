/*
 * Copyright 2017 The boardgame.io Authors.
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Space from './Space';
import './board.css';

class Board extends React.Component {
  static propTypes = {
    G: PropTypes.any.isRequired,
    ctx: PropTypes.any.isRequired,
    moves: PropTypes.any.isRequired,
    playerID: PropTypes.string,
    isActive: PropTypes.bool,
    isMultiplayer: PropTypes.bool,
  };

  onClick = id => {
    if (this.isActive(id)) {
      this.props.moves.clickCell(id);
    }
  };

  // isActive(id) {
  //   if (!this.props.isActive) return false;
  //   if (this.props.G.cells[id] !== null) return false;
  //   return true;
  // }

  render() {
    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 4; j++) {
        const id = 3 * i + j;
        cells.push(
          <td
            key={id}
            // className={this.isActive(id) ? 'active' : ''}
            onClick={() => this.onClick(id)}
          >
            <h4>{this.props.G.cells[id]}</h4>
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    // let winner = null;
    // if (this.props.ctx.gameover) {
    //   winner =
    //     this.props.ctx.gameover.winner !== undefined ? (
    //       <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
    //     ) : (
    //         <div id="winner">Draw!</div>
    //       );
    // }

    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {/* {winner} */}
      </div>
    );
  }
}

export default Board;