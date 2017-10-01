import './index.css'
import numeral from 'numeral';

const salaryRequired = numeral(9000).format('$0,0.00');
console.log(`Well done! You deserve a job offer paid ${salaryRequired} monthly.`);
