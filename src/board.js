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
    
    if(id===5){
      this.props.moves.switchPlayer()

    } else if (id===6){
      this.props.moves.rollDie()

    } else if (this.props.G.spaces[id].isEmpty) {
      this.props.moves.occupySpace(id)
      this.props.moves.fillSpace(id)

    } else {
      this.props.moves.occupySpace(id)
    };
  };

  render() {
    let tbody = [];
    for (let i = 0; i < 3; i++) {
      let cells = [];
      for (let j = 0; j < 4; j++) {
        const id = 4 * i + j;
        let className = this.props.G.spaces[id].className
        let contentClass = ''
        contentClass=(this.props.G.spaces[id].isEmpty ? ' empty' : ' filled' )
        className += contentClass
        cells.push(
          <td
            key={id}
            onClick={() => this.onClick(id)}
          >
            <Space
              spaceNum={id}
              spaceData={this.props.G.spaces[id]}
              className={className} 
              player1={this.props.G.positions.player1===id ? "🦋" : ""}
              player2={this.props.G.positions.player2===id ? "🦄" : ""}
            />
          </td>
        );
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <div id="board-container">
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;