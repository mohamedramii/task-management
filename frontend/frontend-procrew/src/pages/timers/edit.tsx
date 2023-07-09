/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTimer, updateTimer } from '../../services/timers';

const EditTimerPage: React.FC = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();
  const timerId = router.query.id as string;

  useEffect(() => {
    const fetchTimer = async () => {
      try {
        const timer = await getTimer(timerId);
        setTitle(timer.title);
      } catch (error) {
        console.error('Failed to fetch timer:', error);
      }
    };

    fetchTimer();
  }, [timerId]);

  const handleUpdateTimer = async () => {
    try {
      await updateTimer(timerId, title);
      router.push('/timers');
    } catch (error) {
      console.error('Failed to update timer:', error);
    }
  };

  return (
    <div>
      <h1>Edit Timer</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleUpdateTimer}>Update Timer</button>
    </div>
  );
};

export default EditTimerPage;
