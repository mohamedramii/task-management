/* eslint-disable prettier/prettier */

import api from './api';


// frontend/frontend-procrew/src/services/tasks.ts

export async function getTasks(id?: string): Promise<any> {
  try {
    // Make an API request to fetch tasks
    const url = id ? `http://localhost:3001/api/tasks/${id}` : '/api/tasks';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error
    console.error('Error fetching tasks:', error);
    throw error;
  }
}


export async function createTask(taskData: any): Promise<any> {
  try {
    // Make an API request to create a task
    const response = await fetch('http://localhost:3001/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error
    console.error('Error creating task:', error);
    throw error;
  }
}

export async function updateTask(taskId: string, taskData: any): Promise<any> {
  try {
    // Make an API request to update a task
    const response = await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error
    console.error('Error updating task:', error);
    throw error;
  }
}

export async function deleteTask(taskId: string): Promise<any> {
  try {
    // Make an API request to delete a task
    const response = await fetch(`http://localhost:3001/api/tasks/${taskId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error
    console.error('Error deleting task:', error);
    throw error;
  }
}
