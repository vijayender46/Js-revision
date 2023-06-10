import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Day1 from './components/Day1';
import Day2 from './components/Day2';
import NoPage from './components/NoPage';
import Layout from './utils/Layout';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Day1 />} />
            <Route path='day2' element={<Day2 />} />
            <Route path='*' element={<NoPage/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
