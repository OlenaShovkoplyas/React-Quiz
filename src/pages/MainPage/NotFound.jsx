import React from 'react';
import notFound from '../../notFound.png';

export default function NotFound() {
  return (
    <div style={{
      margin: 'auto',
      textAlign: 'center',
    }}>
      <h1>PAGE NOT FOUND</h1>
      <img src={notFound} />
      <h2>Error 404</h2>
    </div>);
}
