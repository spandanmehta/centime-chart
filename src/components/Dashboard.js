import React from 'react';
import SankeyChart from './SankeyChart';
import DataForm from './DataForm';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const storeData = useSelector(store => store.data);
  const isLoading = useSelector(store => store.isLoading);
  const dataArr = storeData.reduce(
    (arr, item) => [...arr, [item.data.from, item.data.to, item.data.weight]],
    []
  );
  const data = [['From', 'To', 'Weight'], ...dataArr];
  return (
    <div className='py-4 px-8 grid  grid-cols-3 grid-flow-row gap-4 place'>
      <div className='col-span-1'>
        <DataForm />
      </div>
      <div className='col-span-2'>
        <SankeyChart data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Dashboard;
