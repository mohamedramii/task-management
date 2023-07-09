/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getTasks, updateTask } from '../../services/tasks';

const EditTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (typeof id === 'string') {
          const task = await getTasks(id);
          setTitle(task.title);
        }
      } catch (error) {
        console.error('Failed to fetch task:', error);
        setError('Failed to fetch task. Please try again later.');
      }
    };

    fetchTask();
  }, [id]);

  const handleUpdateTask = async () => {
    try {
      if (typeof id === 'string') {
        await updateTask(id, { title });
        router.push('/tasks');
      }
    } catch (error) {
      console.error('Failed to update task:', error);
      setError('Failed to update task. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Edit Task</h1>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleUpdateTask}>Update Task</button>
    </div>
  );
};

export default EditTask;


