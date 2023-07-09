/* eslint-disable prettier/prettier */

import axios from 'axios';

const api = axios.create({
  baseURL: 'mongodb+srv://moramy:rrOjUOHIrevUwDgK@cluster0.jhlxrv2.mongodb.net/?retryWrites=true&w=majority', // Replace with your backend API URL
});

export async function login(email: string, password: string): Promise<any> {
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Login failed');
    }
  }
  
// services/api.ts

export async function register(email: string, password: string): Promise<any> {
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  }
  
export default api;
