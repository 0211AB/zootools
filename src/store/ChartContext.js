import React, { createContext, useContext, useState } from 'react';
import monthData from '../data/months'
import dayData from '../data/days'
import hourData from '../data/hours'
import quarterData from '../data/quarter';

const ChartDataContext = createContext();

export const useChartData = () => useContext(ChartDataContext);

export const ChartDataProvider = ({ children }) => {
    const [chartData, setChartData] = useState(monthData);

    const handleButtonChange = (buttonId) => {
        let newData

        if (buttonId === '1h') {
            newData = hourData
        } else if (buttonId === '24h') {
            newData = dayData
        } else if (buttonId === '30d') {
            newData = monthData
        } else if (buttonId === '60d') {
            newData = quarterData
        }

        setChartData(newData);
    };

    return (
        <ChartDataContext.Provider value={{ chartData, handleButtonChange }}>
            {children}
        </ChartDataContext.Provider>
    );
};
