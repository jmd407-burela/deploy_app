import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
//my code
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
