import React, { Fragment } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Konva from 'konva';
import { Stage, Layer, Rect, Text } from 'react-konva';

const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

const App = () => {
  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Refresh to change color" fontSize={15} />
        <Rect
          x={50}
          y={50}
          width={100}
          height={50}
          fill={randomColor}
          stroke={'black'}
          strokeWidth={5}
          onClick={handleRefresh}
        />
      </Layer>
    </Stage>
    
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
