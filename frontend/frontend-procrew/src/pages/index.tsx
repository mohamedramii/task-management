/* eslint-disable prettier/prettier */

import React from 'react';
import Header from '../components/Header';
import TaskList from './tasks/index';
import TimerList from './timers/index';

const IndexPage: React.FC = () => {
  return (
    <div>
      <Header />
      <TaskList />
      <TimerList />
    </div>
  );
};

export default IndexPage;
