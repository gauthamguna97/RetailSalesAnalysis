import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { ListState } from '../features/productData/productDataSlice';
import '../styles/sidebar.css';

const Sidebar =  () => {
    const data = useSelector((state: RootState): ListState => state.product.data)
    return(
        <div className='sidebar'>
            <div className="card">
                <img src={data.image} alt="John" />
                <h1>{data.title}</h1>
                <p className="title">{data.subtitle}</p>
            </div>
            <div className='tags'>
                {data.tags.map((item) => (
                    <div className='tag'>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar;