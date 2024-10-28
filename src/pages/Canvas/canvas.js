import React, { useCallback, useEffect, useState } from 'react';
import {
  ReactFlow,  
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './canva.css';
import AddNode1 from './componentes/addNode';
import ResizableNode from './componentes/ResizableNode';
import Toolbar from './componentes/toolBar/toolBar';

const initialNodes = [];
const initialEdges = [];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [nodeName, setNodeName] = useState('');
  const [nodeBg, setNodeBg] = useState('#eee');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const handleNodeClick = (event, node) => {
    setSelectedNodeId(node.id);
    setNodeName(node.data.label);
    setNodeBg(node.style?.backgroundColor || '#FFFFFF');
  };

  useEffect(() => {
    if (selectedNodeId) {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedNodeId) {
            return {
              ...node,
              data: { ...node.data, label: nodeName }, // Actualiza el label
              style: { ...node.style, backgroundColor: nodeBg }, // Actualiza el color de fondo
            };
          }
          return node;
        }),
      );
    }
  }, [nodeName, nodeBg, selectedNodeId, setNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultViewport={defaultViewport}
        minZoom={0.2}
        maxZoom={4}
        attributionPosition="bottom-left"
        fitView
        fitViewOptions={{ padding: 0.5 }}
        onNodeClick={handleNodeClick} // Manejador para seleccionar nodos
        nodeTypes={{ resizable: ResizableNode }}
      >
        <Controls />
        <Toolbar setNodes={setNodes} />
        <Background variant="dots" gap={12} size={1} />
        <div className="add-node-button-container btn-add'">
          <AddNode1 setNodes={setNodes} />
        </div>
      </ReactFlow>
      
      <div className="updatenode__controls">
        <input
          value={nodeName}
          onChange={(evt) => setNodeName(evt.target.value)}
        />
        <input
          type="color"
          value={nodeBg}
          onChange={(evt) => setNodeBg(evt.target.value)}
        />
      </div>
    </div>
  );
}