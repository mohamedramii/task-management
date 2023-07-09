/* eslint-disable prettier/prettier */

import api from './api';

// services/timers.ts

export async function createTimer(title: string): Promise<any> {
  try {
    const response = await fetch('http://localhost:3001/api/timers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      throw new Error('Failed to create timer');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to create timer');
  }
}
// services/timers.ts

export async function getTimer(id: string): Promise<any> {
  try {
    const response = await fetch(`http://localhost:3001/api/timers/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch timer');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch timer');
  }
}

export async function updateTimer(id: string, timerData: any): Promise<any> {
  try {
    const response = await fetch(`http://localhost:3001/api/timers/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(timerData),
    });
    if (!response.ok) {
      throw new Error('Failed to update timer');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to update timer');
  }
}
