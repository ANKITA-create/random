import React, { useEffect, useState } from "react";
import {Bar} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'

import fireDb from "../firebase"; 
ChartJS.register(...registerables);
 
const BarChart = () => {
    const initialFieldValues = {
      para: '',
    }
    const handleFormSubmit = e => {
      const para = e.target.para.value;
      console.log(para);
      this.getData(para);
      document.getElementById("myForm").reset();
    }

  
  return (
    <div>
    <form
      id="myForm"
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
    <div class="input-group mb-4 w-75 mx-auto">
        <input
          type="search"
          
          

          name="para"
          class="form-control"
          placeholder="Search parameters"
          aria-label="Search parameters"
          aria-describedby="basic-addon2"
          />
          <button
            type="submit"
            class="input-group-text"
            id="basic-addon2"
          >
          <i className="fas fa-search"></i>
          </button>
      </div>
      </form>
    <div className="BarChart">
      <h1>GEEKSFORGEEKS BAR CHART REACTJS</h1>
      <div style={{ maxWidth: "650px" }}>
        <Bar
          data={{
            
            labels: ["1st bar", "2nd bar", "3rd bar", "4th bar"],
            datasets: [
              {
                // Label for bars
                label: "total count/value",
                // Data or value of your each variable
                data: [67, 1319, 613, 1400],
                
                backgroundColor: ["aqua", "green", "red", "yellow"],
                
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
    </div>
  );
}
  
export default BarChart;
