import React, { useState } from 'react';

const SideMenu = ({ setNodeStyle }) => {
    const [textColor, setTextColor] = useState('#000000');
    const [nodeShape, setNodeShape] = useState('rounded');

    const handleTextColorChange = (event) => {
        const newColor = event.target.value;
        setTextColor(newColor);
        setNodeStyle((prevStyle) => ({ ...prevStyle, color: newColor }));
    };

    const handleShapeChange = (event) => {
        const newShape = event.target.value;
        setNodeShape(newShape);
        
        let shapeStyle = {};
        switch (newShape) {
            case 'rectangle':
                shapeStyle = { borderRadius: '0' };
                break;
            case 'rounded':
                shapeStyle = { borderRadius: '15px' };
                break;
            case 'circle':
                shapeStyle = { borderRadius: '50%' };
                break;
            default:
                shapeStyle = { borderRadius: '15px' };
                break;
        }
        setNodeStyle((prevStyle) => ({ ...prevStyle, ...shapeStyle }));
    };

    return (
        <div className="side-menu">
            <label>
                Text Color:
                <input type="color" value={textColor} onChange={handleTextColorChange} />
            </label>
            <label>
                Shape:
                <select value={nodeShape} onChange={handleShapeChange}>
                    <option value="rectangle">Rectangle</option>
                    <option value="rounded">Rounded</option>
                    <option value="circle">Circle</option>
                </select>
            </label>
        </div>
    );
};

export default SideMenu;
