//props
import { ref,get, query, update } from "firebase/database"
import { useStore } from "../../../store.js"
import { db } from "../../firebase.js"
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
import { Hidden } from "@mui/material";
export const Graphic=()=>{
    const [newBalance, setNewBalance] = useState([])
    const [newIncome, setNewIncome] = useState([])
    const [newExpense, setNewExpense] = useState([])
    const update=async()=>{
        const dbRef =query(ref(db, "month"),)
        const snapshot = await get(dbRef)
        if(snapshot.exists()){
          const snapshotData = snapshot.val()
          const balanceArray = snapshotData.map((value)=> value.balance)
          const expenseArray = snapshotData.map((value)=> value.expense)
          const incomeArray = snapshotData.map((value)=> value.income)
          setNewBalance(balanceArray)
          setNewExpense(expenseArray)
          setNewIncome(incomeArray)

        }
        else{
            console.log("error")
        }     
    }
    update()
    useQuery({queryKey:"updateData", queryFn: update})
    const dataset= [
      {
        expense: Number(newExpense[1]),
        income: newIncome[1],
        month: 'Jan',
      },
      {
        expense: Number(newExpense[2]),
        income: newIncome[2],
        month: 'Feb',
      },
      {
        expense: Number(newExpense[3]),
        income: newIncome[3],
        month: 'Mar',
      },
      {
        expense: newExpense[4],
        income: newIncome[4],
        month: 'Apr',
      },
      {
        expense: newExpense[5],
        income: newIncome[5],
        month: 'May',
      },
      {
        expense: newExpense[6],
        income: newIncome[6],
        month: 'Jun',
      },
      {
        expense: newExpense[7],
        income: newIncome[7],
        month: 'Ju',
      },
      {
        expense: newExpense[8],
        income: newIncome[8],
        month: 'Aug',
      },
      {
        expense: newExpense[9],
        income: newIncome[9],
        month: 'Sep',
      },
      {
        expense: newExpense[10],
        income: newIncome[10],
        month: 'Oct',
      },
      {
        expense: newExpense[11],
        income: newIncome[11],
        month: 'Nov',
      },
      {
        expense: newExpense[12],
        income: newIncome[12],
        month: 'Dec',
      },
    ]
    return(
          <>
           <div style ={{width:"100%",display:"flex"}}>
              <BarChart
                dataset={dataset}
                xAxis={[
                  { scaleType: "band", dataKey: 'month' },
                ]}
                series={[{dataKey:"income"}]}
                height={300}
                axisHighlight={{x: "none", y:"line"}}
            
              />
              <BarChart
                dataset={dataset}
                xAxis={[
                  { scaleType: 'band', dataKey: 'month' },
                ]}
                series={[{dataKey:"expense",color: '#D91656'}]}
                height={300}
                axisHighlight={{x: "none", y:"line"}}
              />
           </div>
          </>
    )
}