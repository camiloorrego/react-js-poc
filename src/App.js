import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import { Provider } from './store/index';


export default function App() {

    const [data, setData] = useState([]);

    const handleLoad = () => {
        fetch('http://dummy.restapiexample.com/api/v1/employees').then(response => {
            return response.json()
        }).then(result => {
            console.log(result);
            setData(result.data)
        }).catch(e => {
            console.log(e)
        })
    };

    const handleClear = () => {
        setData([]);
    };


    return (
        <Provider value={data}>
            <Home name="camilo" onLoad={handleLoad} onClear={handleClear}></Home>
        </Provider>
    );
}
