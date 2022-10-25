import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import '../styles/mainview.css';
import { Sale } from '../types/sale';
import Chart from './Chart';
import Table from './Table';

const MainView = () => {
    const salesData = useSelector((state: RootState): Array<Sale> => state.product.data.sales)
    return(
        <div className='mainview'>
            <Chart salesData={salesData}/>
            <Table />
        </div>
    )
}

export default MainView;