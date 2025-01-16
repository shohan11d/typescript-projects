import { useState } from 'react';

function Position( {item} ) {
  const [color, setcolor] = useState('red');

  return (
    <div className="position">
      <h1>{item.title}</h1>
      <p>{item.value}</p>
      <p>{item.color}</p>
      <p>{item.id}</p>
      <div style={{backgroundColor: 'green', padding: '20px', color:'black', fontWeight: 'bold'}}>
        <button onClick={() => setcolor((c)=> c === 'red'? 'blue': 'red')}>Change Color</button>
        <p style={{ color: `${color}` }}>color: {color}</p>
      </div>
    </div>
  );
}

export default Position;
