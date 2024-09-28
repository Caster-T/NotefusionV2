import React from 'react';

const header = ({title, subtitle,paragraph}) => {
  return (
    <div className="header">
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>  
      <p className='Paragraph'>{paragraph}</p>  
    </div>
  );
};

export default header;