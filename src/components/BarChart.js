import React, { useEffect, useState } from "react";
import {Bar} from 'react-chartjs-2';
import {CategoryScale} from 'chart.js';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'

import fireDb from "../firebase"; 
ChartJS.register(...registerables);
var global_data = {};
var city =["Bangalore","Chennai","Delhi","Kolkata","Mumbai"];
var plot_data =[];
class BarChart extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      para: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const para = e.target.para.value;
    console.log(para);
    this.getData(para);
    document.getElementById("myForm").reset();

  };
  getData = (parameters) => {
    console.log("getData functuon called", global_data[parameters]);
    //console.log(document.querySelector(".Mumbai"));
    
   
    city.forEach(function (item, index) {
    var data = global_data[item][parameters];
    plot_data.push(data);

    
  });
    console.log("check",plot_data);
    plot_data.length=0;
  };

  componentDidMount() {
    var city = fireDb.ref("AQI/");
    city.on("value", function (snapshot) {
      // console.log("--------------///////", snapshot.val()  );
      var demo = snapshot.val();
      console.log("dy", demo);
      global_data = demo;

    });
  };
  render(){
  return (
    <div>
    <form
      id="myForm"
      autoComplete="off"
      onSubmit={this.handleSubmit}
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
            
            labels: ["Mumbai","Bangalore","Chennai","Delhi","Kolkata"],
            datasets: [
              {
                data:plot_data, 
                
                backgroundColor: ["aqua", "green", "red", "yellow"],
                
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 5,
              },
            ],
          }}
          
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    precision: 0,
     
                    beginAtZero: true,
                    max:1000
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
}  
export default BarChart;
