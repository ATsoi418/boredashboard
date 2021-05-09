import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

class TfPoints extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inGame:false,
      pauseGame:false
    };
    this.startGame=this.startGame.bind(this);
    this.exitGame=this.exitGame.bind(this);
    this.pauseGame=this.pauseGame.bind(this);
  }

  startGame(){
    this.setState({ inGame:true })
  }

  exitGame(){
    this.setState({ inGame:false })
  }

  pauseGame(){
    this.setState({ pauseGame:!this.state.pauseGame })
  }

  render() {
    const inGame=(this.state.inGame) ? ' inGame' : '';
    const pauseGame=(this.state.pauseGame) ? ' pauseGame' : '';
    
    return (
      <div id="mainContent">
        <h1>
          <Link to="/games">Games</Link> {'>>'} 24 Points
        </h1>
        <div className="tfPointsGame">
          <div className="table">
            <div className={"startButton"+inGame}>
              <button onClick={this.startGame} className="card">
                <p className="start">Start!</p>
              </button>
            </div>
            <div className={"cards"+inGame}>
              <div className="card">
                <p className="num">1</p>
              </div>
              <div className="card">
                <p className="num">2</p>
              </div>
              <div className="card">
                <p className="num">3</p>
              </div>
              <div className="card">
                <p className="num">4</p>
              </div>
            </div>
          </div>
          <div className="rhs">
            <div className={"timer"+inGame+pauseGame}>
              00:00
            </div>
            <div className={"gameControl"+inGame}>
              <button onClick={this.exitGame} variant="info" className="card">
                Exit Game
              </button>
              {/* <ToggleButtonGroup toggle className="card">
                <ToggleButton
                  type="checkbox"
                  variant="info"
                  checked={this.pauseGame=true}
                  value="1"
                  onChange={this.pauseGame}
                >
                  AFK
                </ToggleButton>
              </ToggleButtonGroup > */}
              <button onClick={this.pauseGame} className="card">
                Toggle AFK
              </button>
            </div>
            <div className={"inputs"+inGame}>
              <button onClick={this.startGame} className="card">
                Got it!
              </button>
              <button onClick={this.startGame} className="card">
                This can't be solved..
              </button>
              <button onClick={this.startGame} className="card">
                I give up.. Show solution.
              </button>
            </div>
          </div>
          <br></br>
          <div className="outputs">
            Output here...
          </div>
        </div>
      </div>
    );
  }
}

export default TfPoints;