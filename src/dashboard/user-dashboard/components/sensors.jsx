import { LineChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useState } from 'react'

import axios from 'axios'
import {useQuery} from 'react-query'

import "../styles/insightReports.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sensors = () => {
    const { isLoading, error, data, isFetching } = useQuery('sensors-data', async() => {
        const data = JSON.stringify({
            "query": "SELECT $id as ID, $ts as Timestamp, Temperature, Humidity, Moisture, Light FROM dtmi:x1ymgbguae:gqityf1uu WHERE WITHIN_WINDOW('2023-01-15T13:25:28.85Z/2023-01-15T16:11:20.698Z') AND $id='NodeMCU'"
          });
    
        const res = await axios({
            method: 'post',
            url: 'https://farmap-nodemcu-iot.azureiotcentral.com/api/query?api-version=2022-10-31-preview',
            headers: { 
              'Authorization': 'SharedAccessSignature sr=04654ac9-9a6f-41c9-aa44-592a12a1483a&sig=K6QHAl%2BRQYyozkFvzrwerZXZ9QIaN72Qu1aYh4WjHe4%3D&skn=dashboard-integrate&se=1705341507880', 
              'Content-Type': 'application/json'
            },
            data : data
        });

        if (!res) return null


        console.log("New data is being fetched")
    
        const sensorsData = await res.data;
        const fetchedData = {
            Temperature: {},
            Humidity: {},
            Moisture: {},
            Light: {}
        };
        
        sensorsData.results.forEach(sensorData => {
            if (sensorData.hasOwnProperty('Temperature')) {
                fetchedData.Temperature[sensorData.Timestamp] = sensorData.Temperature.toFixed(2);
            }
            if (sensorData.hasOwnProperty('Humidity')) {
                fetchedData.Humidity[sensorData.Timestamp] = sensorData.Humidity.toFixed(2);
            }
            if (sensorData.hasOwnProperty('Moisture')) {
                fetchedData.Moisture[sensorData.Timestamp] = sensorData.Moisture.toFixed(2);
            }
            if (sensorData.hasOwnProperty('Light')) {
                fetchedData.Light[sensorData.Timestamp] = sensorData.Light.toFixed(2);
            }
        });

        const min_max_values = {
            Temperature: { min: Number.MAX_VALUE, max: Number.MIN_VALUE },
            Humidity: { min: Number.MAX_VALUE, max: Number.MIN_VALUE },
            Moisture: { min: Number.MAX_VALUE, max: Number.MIN_VALUE },
            Light: { min: Number.MAX_VALUE, max: Number.MIN_VALUE }
        };
        
        for (const [field, data] of Object.entries(fetchedData)) {
            const values = Object.values(data);
            min_max_values[field].min = Math.min(...values);
            min_max_values[field].max = Math.max(...values);
        }

        return {sensorData: fetchedData, minMaxValues: min_max_values}
    }, {
        staleTime: Infinity
    });

    if (isFetching || isLoading) return
    if (error){
        console.log('An error has occurred: ' + error.message)
        toast.error("Error encountered at fetch")
    }
    
    return(
        <>
        <div className="charts-container">
            <p>Temperature data</p>
            <LineChart data={
                [{"name":"Temperature", "data": data ? data.sensorData.Temperature : []}]} 
                min={data? data.minMaxValues.Temperature.min : 0}
                max={data? data.minMaxValues.Temperature.max + 0.1 : 10}
                curve={true}
                colors={['#e74c3c']}
                ytitle="Temperature" xtitle="Time"
                download="temperature-data" />

            <p>Moisture data</p>
            <LineChart data={
                [{"name":"Moisture", "data": data? data.sensorData.Moisture : []}]} 
                min={data? data.minMaxValues.Moisture.min : 0}
                max={data? data.minMaxValues.Moisture.max + 1 :10}
                curve={true}
                colors={["#07bc0c"]}
                ytitle="Moisture" xtitle="Time"
                download="moisture-data" />

            <p>Humidity data</p>
            <LineChart data={
                [{"name":"Relative Humidity", "data": data? data.sensorData.Humidity : []}]} 
                min={data? data.minMaxValues.Humidity.min : 0}
                max={data? data.minMaxValues.Humidity.max + 3 : 10}
                curve={true}
                ytitle="Relative Humidity /gkg-1" xtitle="Time"
                download="humidity-data" />

            <p>Light data</p>
            <LineChart data={
                 [{"name":"Light Intensity", "data": data? data.sensorData.Light : []}]} 
                min={data? data.minMaxValues.Light.min : 0}
                max={data? data.minMaxValues.Light.max + 2 : 10}
                curve={true}
                ytitle="Light Intensity" xtitle="Time"
                colors={['#f1c40f']}
                download="light-data" />
            </div>
            <ToastContainer />
        </>
    )
}

export default Sensors;