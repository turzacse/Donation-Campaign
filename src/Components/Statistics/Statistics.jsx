import React from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "react-apexcharts"; 


const Statistics = () => {
    const totalData = useLoaderData();
    const donatedData = JSON.parse(localStorage.getItem('donation'));
    console.log(donatedData);
    //const totalItems = totalData.length + donatedData.length;
    
    var y = 0;
    if(donatedData == null ) y = 0;
    else y= donatedData.length;

    const x = totalData.length-y;
    const customColors = ["#FF5733", "#33FF57"];
    return (
        <div className="mt-10">
           <React.Fragment>
              <Chart
              type="pie"
              width="100%"
              height={550}

              series={[y,x]}

              options={
                {
                    noData:{text: "Empty"},
                    labels: ["Your Donation","Total Donation"],
                    colors: customColors,
                    responsive: [
                        {
                            breakpoint: 768,
                            options: {
                                chart: {
                                    height: 250,
                                },
                            },
                        },
                        {
                            breakpoint: 576, 
                            options: {
                                chart: {
                                    height: 200,
                                },
                            },
                        },
                    ],
                }
              }
              >
              </Chart>
           </React.Fragment>
        </div>
    );
};

export default Statistics;