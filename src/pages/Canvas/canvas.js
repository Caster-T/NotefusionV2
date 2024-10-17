import React, { useState } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap
} from 'react-flow-renderer';
import './Canvas.css'; // Si vas a usar estilos

const initialElements = [];

function Canvas() {
  const [elements, setElements] = useState(initialElements);

  const addNode = (type) => {
    const id = `${elements.length + 1}`;
    const newNode = {
      id,
      type: 'default',
      data: { label: `${type} ${id}` },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setElements((els) => [...els, newNode]);
  };

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div className="app">
      <div className="navbar">
        <button onClick={() => addNode('Cuadrado')}>Agregar Cuadrado</button>
        <button onClick={() => addNode('Círculo')}>Agregar Círculo</button>
      </div>

      <div className="canvas">
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          snapToGrid={true}
          snapGrid={[15, 15]}
          style={{ width: '100%', height: '90vh' }}
        >
          <Background variant="dots" gap={12} size={1} />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Canvas;
