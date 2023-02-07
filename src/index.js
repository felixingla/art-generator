import React from 'react';
import './App.css';
import { createRoot } from 'react-dom/client';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';

var randomColor = Math.floor(Math.random()*16777215).toString(16);

const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text text="Refresh to change color" fontSize={15} />
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill={randomColor}
        />
      </Layer>
    </Stage>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
