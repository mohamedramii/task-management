/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createTimer } from '../../services/timers';

const CreateTimerPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleCreateTimer = async () => {
    try {
      await createTimer(title);
      router.push('/timers');
    } catch (error) {
      console.error('Failed to create timer:', error);
    }
  };

  return (
    <div>
      <h1>Create Timer</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleCreateTimer}>Create Timer</button>
    </div>
  );
};

export default CreateTimerPage;
