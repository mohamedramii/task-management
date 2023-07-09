/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { createTask } from '../../services/tasks';

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleCreateTask = async () => {
    try {
      await createTask({ title });
      router.push('/tasks');
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
};

export default CreateTask;
