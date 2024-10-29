import React, { useCallback } from 'react';
import ResizableNodeSelected from './ResizableNode.js';
let nodeId = 0;

function Agregarnodo({ setNodes }) {
    const onClick = useCallback(() => {
        const id = `${++nodeId}`;
        const newNode = {
            id,
            position: { x: 0, y: 0 },
            data: { label: `Node ${id}` },
            type: 'resizable',
            style: {
                background: '#fff',
                border: '1px solid black',
                borderRadius: 15,
                fontSize: 12,
                },
        };
        setNodes((nds) => [...nds, newNode]);
    }, [setNodes]);

    return (
        <button onClick={onClick} className='btn-add'>+</button>
    );
}

export default function AddNode1({ setNodes }) {
    return <Agregarnodo setNodes={setNodes} />;
}