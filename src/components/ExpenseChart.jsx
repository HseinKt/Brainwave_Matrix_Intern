import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseChart = ({ expenses }) => {
    const data = {
        labels: expenses.map(exp => exp.name),
        datasets: [
            {
                label: 'Expenses',
                data: expenses.map(exp => Number(exp.amount)),
                backgroundColor: [
                '#1976d2', '#f44336', '#ff9800', '#4caf50',
                '#9c27b0', '#009688', '#3f51b5', '#ff5722'
                ],
                borderWidth: 1,
                borderColor: '#fff', // creates slice borders like pizza
                hoverOffset: 8, // slice pops out slightly on hover
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 12,
                    padding: 15,
                }
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.label}: $${context.formattedValue}`;
                    }
                }
            }
        }
    };

    return (
        <div className="expense-chart">
            <h3 style={{ textAlign: 'center' }}>Chart of Expense</h3>
            <Pie data={data} options={options} />
        </div>
    );
};

export default ExpenseChart;
