import React from 'react';
import PieChart from '../components/PieChart'; // path as per your structure

const Home = () => {
    return (
        <div>
            <h2 className="mb-4">Dashboard Overview</h2>
            <div className="d-flex justify-content-center">
                <PieChart />
            </div>
        </div>
    );
};

export default Home;
