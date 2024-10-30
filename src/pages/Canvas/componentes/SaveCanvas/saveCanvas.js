import React, { useCallback, useEffect, useState } from 'react';
import { ReactFlow, useNodesState, useEdgesState } from '@xyflow/react';

const CanvasEditor = ({ projectTitle }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Función para guardar el canvas
  const saveCanvas = useCallback(() => {
    const canvasData = {
      nodes,
      edges,
    };
    localStorage.setItem(projectTitle, JSON.stringify(canvasData));
    alert(`Canvas guardado como: ${projectTitle}`);
  }, [nodes, edges, projectTitle]);

  // Efecto para cargar el canvas desde localStorage
  useEffect(() => {
    const loadCanvas = () => {
      const canvasData = localStorage.getItem(projectTitle);
      if (canvasData) {
        const { nodes, edges } = JSON.parse(canvasData);
        setNodes(nodes || []);
        setEdges(edges || []);
      }
    };

    loadCanvas();
  }, [projectTitle, setNodes, setEdges]);

  return (
    <>
      <button onClick={saveCanvas}>Guardar Canvas</button>
    </>
  );
};

export default CanvasEditor;
