import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [genderData, setGenderData] = useState({ male: 0, female: 0 });

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/users');
        const data = await res.json();

        const male = data.users.filter(user => user.gender === 'male').length;
        const female = data.users.filter(user => user.gender === 'female').length;

        setGenderData({ male, female });
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 10000); // Refresh every 10s
        return () => clearInterval(interval);
    }, []);

    const pieData = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                label: 'Gender Distribution',
                data: [genderData.male, genderData.female],
                backgroundColor: ['#0d6efd', '#dc3545'],
                borderColor: ['#ffffff', '#ffffff'],
                borderWidth: 2,
            },
        ],
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
            <h5 className="text-center">Gender Distribution</h5>
            <Pie data={pieData} />
        </div>
    );
};

export default PieChart;
