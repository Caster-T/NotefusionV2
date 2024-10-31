import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

const initialNodes = [{ id: '1', position: { x: 0, y: 0 }, data: { label: 'Apreta el + para iniciar' } }];
const initialEdges = [];
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };

export default function Canvas() {
  const { titulo } = useParams(); // Obtener el título desde la URL
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
              data: { ...node.data, label: nodeName },
              style: { ...node.style, backgroundColor: nodeBg },
            };
          }
          return node;
        }),
      );
    }
  }, [nodeName, nodeBg, selectedNodeId, setNodes]);

  const saveCanvas = () => {
    const canvasData = {
      nodes,
      edges,
    };
    localStorage.setItem(titulo, JSON.stringify(canvasData));
  };

  useEffect(() => {
    const storedCanvas = localStorage.getItem(titulo);
    if (storedCanvas) {
      const { nodes: savedNodes, edges: savedEdges } = JSON.parse(storedCanvas);
      setNodes(savedNodes);
      setEdges(savedEdges);
    }
  }, [titulo, setNodes, setEdges]);

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
        onNodeClick={handleNodeClick}
        nodeTypes={{ resizable: ResizableNode }}
      >
        <Controls />
        <Toolbar setNodes={setNodes} onSaveCanvas={saveCanvas}  />
        <Background variant="dots" gap={12} size={1} />
        <div className="add-node-button-container btn-add">
          <AddNode1 setNodes={setNodes} />
        </div>
      </ReactFlow>

      <div className="updatenode__controls">
        <input
          value={nodeName}
          onChange={(evt) => setNodeName(evt.target.value)}
        />
        <input
          className='color-button'
          type="color"
          value={nodeBg}
          onChange={(evt) => setNodeBg(evt.target.value)}
        />
        <div className="color-options">
          <button className="color-button red" onClick={() => setNodeBg('#FFB3B3')}></button>
          <button className="color-button blue" onClick={() => setNodeBg('#B3C6FF')}></button>
          <button className="color-button yellow" onClick={() => setNodeBg('#FFFFB3')}></button>
          <button className="color-button gray" onClick={() => setNodeBg('#B3B3B3')}></button>
        </div>
      </div>
    </div>
  );
}
