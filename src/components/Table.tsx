import React, { useState } from 'react';
import '../styles/table.css';
import Arrow from './Arrow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Sale } from '../types/sale';
import { updateProduct } from '../features/productData/productDataSlice';


const Table = () => {

    const [currentSelect, setCurrentSelect] = useState('');
    const dispatcher = useDispatch();
    const data = useSelector((state: RootState): Array<Sale> => state.product.sales)

    const reset = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const value = e.currentTarget.getAttribute('data-id')
        console.log(value)
        if (!value) {
          return;
        }
        var toSet = ""
        if (!currentSelect || currentSelect.indexOf(value) === -1 || currentSelect.indexOf('asc') === -1) {
          toSet = value + "-asc";
        } else {
          toSet = value + "-des";
        }
        setCurrentSelect(toSet);
        sortTable(value, toSet.split("-")[1])
      };
    
      const sortTable = (value: string, type: string) => {
        if (value) {
          dispatcher(updateProduct({value, type}));
        }
      }
  
  return(
    <div className='tabler'>
      <table>
        <thead>
          <tr>
            <th>
              <div data-id="date" onClick={(e) => reset(e)}>Date</div>
              <Arrow current={'date'} active={currentSelect}/>
            </th>
            <th>
              <div data-id="retailSales" onClick={(e) => reset(e)} >Retail Sales</div>
              <Arrow current={'retailSales'} active={currentSelect}/>
            </th>
            <th>
              <div data-id="wholesaleSales" onClick={(e) => reset(e)}>Wholesale Sales</div>
              <Arrow current={'wholesaleSales'} active={currentSelect}/>
            </th>
            <th>
              <div data-id="unitsSold" onClick={(e) => reset(e)}>Units Sold</div>
              <Arrow current={'unitsSold'} active={currentSelect}/>
            </th>
            <th>
              <div data-id="retailerMargin" onClick={(e) => reset(e)}>Retailer Margin</div>
              <Arrow current={'retailerMargin'} active={currentSelect}/>
            </th>
          </tr>
        </thead>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.weekEnding}</td>
              <td>{item.retailSales}</td>
              <td>{item.wholesaleSales}</td>
              <td>{item.unitsSold}</td>
              <td>{item.retailerMargin}</td>
            </tr>
          )
      })}
      </table>
    </div>
  )
}

export default Table;
