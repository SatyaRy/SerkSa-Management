//props
import { useStore } from "../../../store.js";
import { BarChart } from "@mui/x-charts";
export const Graphic=()=>{
    const {incomeData,expenseData} =useStore()
    const dataset= [
      {
        expense: (expenseData[0]),
        income: incomeData[0],
        month: 'Jan',
      },
      {
        expense: (expenseData[1]),
        income: incomeData[1],
        month: 'Feb',
      },
      {
        expense: (expenseData[2]),
        income: incomeData[2],
        month: 'Mar',
      },
      {
        expense: expenseData[3],
        income: incomeData[3],
        month: 'Apr',
      },
      {
        expense: expenseData[4],
        income: incomeData[4],
        month: 'May',
      },
      {
        expense: expenseData[5],
        income: incomeData[5],
        month: 'Jun',
      },
      {
        expense: expenseData[6],
        income: incomeData[6],
        month: 'Jul',
      },
      {
        expense: expenseData[7],
        income: incomeData[7],
        month: 'Aug',
      },
      {
        expense: expenseData[8],
        income: incomeData[8],
        month: 'Sep',
      },
      {
        expense: expenseData[9],
        income: incomeData[9],
        month: 'Oct',
      },
      {
        expense: expenseData[10],
        income: incomeData[10],
        month: 'Nov',
      },
      {
        expense: expenseData[11],
        income: incomeData[11],
        month: 'Dec',
      },
    ]
    return(
          <div style={{display:"flex", gap:"20px", width:"100%"}}>
            <BarChart
                dataset={dataset}
                xAxis={[
                  { scaleType: "band", dataKey: 'month' ,label: 'Profit '},
                ]}
                series={[{dataKey:"income",color: "#8FD14F"}]}
                height={300}
                axisHighlight={{x: "line", y:"line"}}
                tooltip={{trigger:"none"}}
            
              />
           <BarChart
                dataset={dataset}
                xAxis={[
                  { scaleType: 'band', dataKey: 'month',label: 'Loss ' },
                ]}
                series={[{dataKey:"expense",color: '#D91656'}]}
                height={300}
                axisHighlight={{x: "line", y:"line"}}
                tooltip={{trigger:"none"}}
              />
          </div>
    )
}