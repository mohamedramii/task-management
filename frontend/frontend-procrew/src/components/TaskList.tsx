/* eslint-disable prettier/prettier */
import React from 'react';

interface Task {
  id: number;
  title: string;
  status: string;
  timeSpent: string;
  user: string;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="border p-4 mb-4">
          <h3 className="text-lg font-bold">{task.title}</h3>
          <p className="text-gray-600">{task.status}</p>
          <p className="text-gray-600">Time Spent: {task.timeSpent}</p>
          <p className="text-gray-600">Created by: {task.user}</p>
          {/* Display other task details */}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
