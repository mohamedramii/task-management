/* eslint-disable prettier/prettier */
import React from 'react';

interface Timer {
  id: number;
  title: string;
  timeElapsed: string;
}

interface TimerListProps {
  timers: Timer[];
}

const TimerList: React.FC<TimerListProps> = ({ timers }) => {
  return (
    <div>
      {timers.map((timer) => (
        <div key={timer.id} className="border p-4 mb-4">
          <h3 className="text-lg font-bold">{timer.title}</h3>
          <p className="text-gray-600">Time Elapsed: {timer.timeElapsed}</p>
          {/* Display other timer details */}
        </div>
      ))}
    </div>
  );
};

export default TimerList;
