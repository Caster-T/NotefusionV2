import { memo } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';

const ResizableNodeSelected = ({ data, selected, onResize }) => {
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={100}
        minHeight={30}
        onResize={onResize}
      />
      <Handle type="target" position={Position.Left} />
      <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
          padding: 10,
          }}>{data.label}</div>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default memo(ResizableNodeSelected);