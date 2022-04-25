import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import sankeyData from '../../data/sankeyData';

const initialState = {
  data: [],
  isLoading: true,
};

export const getChartData = createAsyncThunk('sankey/getChartData', () => {
  return sankeyData;
});

const sankeySlice = createSlice({
  name: 'sankey',
  initialState,
  reducers: {
    addRow: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
    deleteRow: (state, { payload }) => {
      state.data = state.data.filter(item => item.id !== payload.id);
    },
  },
  extraReducers: {
    [getChartData.pending]: state => {
      state.isLoading = true;
    },
    [getChartData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    [getChartData.rejected]: state => {
      state.isLoading = false;
    },
  },
});

export const { addRow, deleteRow } = sankeySlice.actions;

export default sankeySlice.reducer;
