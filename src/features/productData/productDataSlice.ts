import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { data } from '../../data/data';
import { Sale } from '../../types/sale';

export interface ListState {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
      customer: string;
      review: string;
      score: number;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: Array<Sale>;
}

const initialState: { data: ListState, sales:Array<Sale> , key: string, type: string}  = {
  data,
  sales: data.sales,
  key: 'date',
  type: 'asc',
};

const dateComparator = (type: string) => {
  var sign = type === 'asc' ? 1 : -1;
  return (a: Sale, b: Sale) => sign * (new Date(a.weekEnding).getTime() - new Date(b.weekEnding).getTime())
}

const retailSalesComparator = (type: string) => {
  var sign = type === 'asc' ? 1 : -1;
  return (a: Sale, b: Sale) => sign * ((a.retailSales) - (b.retailSales));
}

const wholesaleSalesComparator = (type: string) => {
  var sign = type === 'asc' ? 1 : -1;
  return (a: Sale, b: Sale) => sign * ((a.wholesaleSales) - (b.wholesaleSales));
}

const unitsSoldComparator = (type: string) => {
  var sign = type === 'asc' ? 1 : -1;
  return (a: Sale, b: Sale) => sign * ((a.unitsSold) - (b.unitsSold));
}

const retailerMarginComparator = (type: string) => {
  var sign = type === 'asc' ? 1 : -1;
  return (a: Sale, b: Sale) => sign * ((a.retailerMargin) - (b.retailerMargin));
}

export const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<{type: string, value: string}>) => {
      state.key = action.payload.value || state.key
      state.type = action.payload.type || state.type
      let value = [...state.sales];
      switch(state.key) {
        case 'date':
          value = [...value].sort(dateComparator(state.type))
          break;
        case 'retailSales':
          value =[...value].sort(retailSalesComparator(state.type))
          break;
        case 'wholesaleSales':
          value =[...value].sort(wholesaleSalesComparator(state.type))
          break;
        case 'unitsSold':
          value =[...value].sort(unitsSoldComparator(state.type))
          break;
        case 'retailerMargin':
          value =[...value].sort(retailerMarginComparator(state.type))
          break;
      }
      state.sales = value
    },
  },
});

export const { updateProduct } = productDataSlice.actions;

export default productDataSlice.reducer;
