import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';

const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

const App = () => {
  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={window.innerWidth / 2 - 100} // half of the stage width minus half of the rectangle width
          y={window.innerHeight / 2 - 100} // half of the stage height minus half of the rectangle height
          width={200}
          height={200}
          fill={randomColor}
          strokeWidth={5}
          onClick={handleRefresh}
          align="center"
        />
      </Layer>
    </Stage>
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
