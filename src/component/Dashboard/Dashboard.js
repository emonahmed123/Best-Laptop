import React from 'react';
import BarChartFirst from '../BarChart/BarChartFirst';
import './Dashboard.css'
import MyFristLineChart from '../MyFristLineChart/MyFristLineChart';
const Dashboard = () => {
    return (
        <div className='chart-container'>
      <div className='line-chart'>
         
         <h2 className='htwo'>Monthly sell</h2>
      <MyFristLineChart></MyFristLineChart>
      </div >
        <div className='bar-chart'>
            <h2 className='htwo'>Revenue vs Investment</h2>
       <BarChartFirst></BarChartFirst>

        </div>

        </div>
    );
};

export default Dashboard;