import React from 'react';
import RChart from 'react-apexcharts'
import '../styles/chart.css'

const Chart = ({salesData}) => {

    var max = 0;
    var min = Infinity;


    var max1 = 0;
    var min1 = Infinity;

    salesData.forEach(item => {
        min = Math.min(item.retailerMargin, min);
        max = Math.max(item.retailerMargin, max);
        min1 = Math.min(item.unitsSold, min1);
        max1 = Math.max(item.unitsSold, max1);
    });

    

    const innerData = salesData.map(item => {
        return [new Date(item.weekEnding).getTime(), (item.retailerMargin/(max - min)) + 1,  item.retailerMargin]
    });

    const innerData2 = salesData.map(item => {
        return [new Date(item.weekEnding).getTime(), (item.unitsSold/(max1 - min1)), item.unitsSold ]
    });

    const data =  {
      
        series: [{
            name: "Retailer Margin",
            data: innerData
          }, {
            name: "Units Sokd",
            data: innerData2
          }],
        options: {
            chart: {
              id: 'area-datetime',
              type: 'area',
              height: 350,
              zoom: {
                autoScaleYaxis: true
              },
              tension:0.1,
              toolbar: {
                show: false,
              },
            },
            annotations: {
              yaxis: [{
                y: 30,
                borderColor: '#999',
                label: {
                  show: true,
                  text: 'Support',
                  style: {
                    color: "#fff",
                    background: '#00E396'
                  }
                }
              }],
              xaxis: [{
                x: new Date('14 Nov 2012').getTime(),
                borderColor: '#999',
                yAxisIndex: 0,
                label: {
                  show: true,
                  text: 'Rally',
                  style: {
                    color: "#fff",
                    background: '#775DD0'
                  }
                }
              }]
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
              style: 'hollow',
            },
            xaxis: {
              type: 'datetime',
              min: new Date('01 Jan 2017').getTime(),
              tickAmount: 6,
            },
            yaxis: {
              show: false,
            },
            tooltip: {
              enabled: false
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
              }
            },
            stroke: {
                curve: 'smooth'
            },
          },
          selection: 'one_year',
    };

  
    return (
    <div id="chart">
        <RChart options={data.options} series={data.series} type="line" height={350} />
    </div>
    );
  }

export default Chart