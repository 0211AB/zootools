import React, { useState, useEffect } from 'react'
import './BarChart.css'
import { useChartData } from '../../store/ChartContext';


const BarChart = () => {
    const [tooltipText, setTooltipText] = useState('');
    const { chartData } = useChartData();

    useEffect(() => {
        const tooltip = document.querySelector("[data-tooltip]");
        const chartBars = document.querySelectorAll("[data-chart-bar]");

        // Calculate maxDayAmount
        let maxDayAmount = 0;
        for (let i = 0; i < chartData.length; i++) {
            if (chartData[i].amount > maxDayAmount) {
                maxDayAmount = chartData[i].amount;
            }
        }

        // Calculate charBarsHeight
        const charBarsHeight = chartData.map(day => (day.amount / maxDayAmount) * 100);

        // Set chart bars height
        const setChartBarsHeight = (heights) => {
            chartBars.forEach((bar, index) => {
                const minHeight = 100; // Set your desired minimum height
                const calculatedHeight = heights[index] / 100 * 800; // Adjust as needed
                const finalHeight = calculatedHeight < minHeight ? minHeight : calculatedHeight;

                bar.style.transform = `scaleY(${finalHeight / 800})`;
            });
        };

        setChartBarsHeight(charBarsHeight);

        // Set tooltip position
        const setTooltipPos = (top, left, chartBarWidth) => {
            const tooltipHeight = tooltip.offsetHeight;
            const gap = 8;

            tooltip.style.top = `${top - tooltipHeight - gap}px`;
            tooltip.style.left = `${left + chartBarWidth / 2}px`;
        };

        // Chart bar on hover
        const chartBarOnHover = function () {
            setTooltipText('');
            tooltip.classList.add("active");

            const barTopPos = this.getBoundingClientRect().top;
            const barLeftPos = this.getBoundingClientRect().left;
            const barWidth = this.offsetWidth;

            setTooltipPos(barTopPos, barLeftPos, barWidth);
            addTooltipValue.call(this);
        };

        // Hide tooltip
        const hideTooltip = function () {
            tooltip.classList.remove("active");
        };

        // Add tooltip value
        const addTooltipValue = function () {
            const day = this.getAttribute("data-chart-bar");
            const dayData = chartData.find(item => item.day === day);
            if (dayData) {
                setTooltipText(dayData.amount.toString() + "~" + dayData.day.toLowerCase());
            }
        };

        // Attach event listeners
        chartBars.forEach((chartBar) => {
            chartBar.addEventListener("mouseover", chartBarOnHover);
            chartBar.addEventListener("mouseleave", hideTooltip);
        });
    }, [chartData]);

    return (
        <div className="chart-container">
            <div className="chart-card">

                <h3 className="h2">100,000 <ion-icon name="people-outline"></ion-icon></h3>
                <h3 className="p-text">Participants</h3>

                <table className="card-table">
                    <tbody className="table-body horizontal-lines">

                        {chartData.map((row_data, idx) => {
                            return <tr className="table-row flex-center" key={idx}>
                                <td className="table-data">
                                    <div className="chart-bar" data-chart-bar={row_data.day}></div>
                                </td>
                            </tr>
                        })}

                    </tbody>
                </table>

                <span className="tooltip text" data-tooltip><strong>{tooltipText.split("~")[0]} </strong>signups<div className='text-info'>{tooltipText.split("~")[1]}</div><div className='arrow-down'></div></span>
            </div>

        </div>
    )
}

export default BarChart