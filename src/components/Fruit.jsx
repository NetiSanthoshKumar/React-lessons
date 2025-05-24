import React from 'react';

export default function Fruit({ name }) {
  return (
    <div style={{
      border: '1px solid black',
      width: '150px',
      height: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '10px'
    }}>
      <strong>{name}</strong>
    </div>
  );
}