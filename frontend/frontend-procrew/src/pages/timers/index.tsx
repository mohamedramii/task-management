/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import Header from '../../components/Header';
import TimerList from '../../components/TimerList';

const TimerIndexPage: React.FC = () => {
  const timers = [
    // Add your timer objects here
    { id: 1, title: 'Timer 1', timeElapsed: '00:10:30' },
    { id: 2, title: 'Timer 2', timeElapsed: '00:05:45' },
    { id: 3, title: 'Timer 3', timeElapsed: '00:20:15' },
  ];

  return (
    <div>
      <Header />
      <TimerList timers={timers} />
    </div>
  );
};

export default TimerIndexPage;

