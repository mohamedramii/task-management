/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import React from 'react';
import { useRouter } from 'next/router';
import { useTasks } from '../../hooks/tasks';

interface Task {
  id: string;
  title: string;
}

const TaskList: React.FC = () => {
  const router = useRouter();
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <button onClick={() => router.push('/tasks/create')}>Create Task</button>
      <ul>
        {tasks.map((task: Task) => (
          <li key={task.id}>
            <span>{task.title}</span>
            <button onClick={() => router.push(`/tasks/edit/${task.id}`)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

