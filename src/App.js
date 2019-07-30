import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="board">
        <div className='row'>
          <div className='square player-one'>X</div>
          <div className='square player-two'>O</div>
          <div className='square player-one'>X</div>
        </div>
        <div className='row'>
          <div className='square player-two'>O</div>
          <div className='square player-one'>X</div>
          <div className='square player-two'>O</div>
        </div>
        <div className='row'>
          <div className='square player-one'>X</div>
          <div className='square player-two'>O</div>
          <div className='square available'></div>
        </div>
      </div>
      <div className='message'>
        <h2>Player X Wins!</h2>
      </div>
    </div>
  );
}

export default App;
