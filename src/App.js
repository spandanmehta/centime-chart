import { useEffect, Suspense } from 'react';
import { getChartData } from './features/sankey/sankeySlice';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChartData());
  }, [dispatch]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className='App' data-testid='App'>
        <Header />
        <Dashboard />
      </div>
    </Suspense>
  );
}

export default App;
