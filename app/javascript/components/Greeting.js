import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const fetchGreeting = async () => {
      const response = await fetch('/api/greetings/random_batch?count=1');
      const data = await response.json();
      setGreeting(data.greetings[0]);
    };

    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
