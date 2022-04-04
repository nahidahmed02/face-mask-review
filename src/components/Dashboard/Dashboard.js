import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie } from 'recharts';


const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='d-flex justify-content-center mt-5'>
            <div>
                <h5 className='text-center fw-bold'>Month Wise Revenue</h5>
                <LineChart width={400} height={300} data={data}>
                    <Line dataKey={'revenue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>

            <div>
                <h5 className='text-center fw-bold mb-3'>Sell Vs Investment</h5>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="sell" nameKey="investment" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" nameKey="investment" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;