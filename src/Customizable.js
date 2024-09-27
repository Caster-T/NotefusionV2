import React from 'react';

function CustomizationPanel({ section, updateSection }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <h4>Customize Section</h4>

      <label>Background Color: </label>
      <input
        type="color"
        value={section.backgroundColor}
        onChange={(e) => updateSection(section.id, { backgroundColor: e.target.value })}
      />
      <br />

      <label>Text Color: </label>
      <input
        type="color"
        value={section.textColor}
        onChange={(e) => updateSection(section.id, { textColor: e.target.value })}
      />
      <br />

      <label>Font Size: </label>
      <input
        type="number"
        value={parseInt(section.fontSize)}
        onChange={(e) => updateSection(section.id, { fontSize: `${e.target.value}px` })}
      />
    </div>
  );
}

export default CustomizationPanel;