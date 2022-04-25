import { configureStore } from '@reduxjs/toolkit';
import sankeyReducer from './features/sankey/sankeySlice';

const store = configureStore({
  reducer: sankeyReducer,
});

export default store;
