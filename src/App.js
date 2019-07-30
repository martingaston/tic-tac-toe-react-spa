import React from 'react';
import Square from './Square'

function App() {
  return (
    <div className="App">
      <div className="board">
        <div className='row'>
          <Square position={1} value='X' />
          <Square position={2} value='O' />
          <Square position={3} value='X' />
        </div>
        <div className='row'>
          <Square position={4} value='O' />
          <Square position={5} value='X' />
          <Square position={6} value='O' />
        </div>
        <div className='row'>
          <Square position={7} value='X' />
          <Square position={8} value='O' />
          <Square position={9} value='' onClick={console.log} />
        </div>
      </div>
      <div className='message'>
        <h2>Player X Wins!</h2>
      </div>
    </div>
  );
}

export default App;
