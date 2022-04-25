import React from 'react';
import SankeyChart from './SankeyChart';
import DataForm from './DataForm';

const Dashboard = () => {
  return (
    <div className='py-4 px-8 grid  grid-cols-3 grid-flow-row gap-4 place'>
      <div className='col-span-1'>
        <DataForm />
      </div>
      <div className='col-span-2'>
        <SankeyChart />
      </div>
    </div>
  );
};

export default Dashboard;
