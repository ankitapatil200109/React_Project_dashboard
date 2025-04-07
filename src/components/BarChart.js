import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
    const [sales, setSales] = useState([]);

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();
        // Fake monthly sales using user ages
        const monthlySales = [0, 0, 0, 0, 0, 0];
        data.users.forEach((user, i) => {
            const month = i % 6;
            monthlySales[month] += user.age * 100; // simulate
        });
        setSales(monthlySales);
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 10000); // refresh every 10s
        return () => clearInterval(interval);
    }, []);

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Monthly Sales',
                data: sales,
                backgroundColor: '#0d6efd',
            },
        ],
    };

    return <Bar data={chartData} />;
};

export default BarChart;
