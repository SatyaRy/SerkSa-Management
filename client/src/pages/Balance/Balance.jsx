import "./Balance.scss";
import { PieChart } from "@mui/x-charts/PieChart";
import money from "../../image/money.svg";
import AddTransaction from "../../model/Transaction/Add.jsx";
import { useStore } from "../../../store.js";
import { useEffect } from "react";
import { db } from "../../firebase.js";
import { get } from "firebase/database";
export default function Balanace() {
  const { toggleTransaction } = useStore();
  const date = new Date
  const today = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()
  useEffect(()=>{
     const fetchData = async()=>{
      const dbRef = ref(db, "balance")
      const snapshot = await get(dbRef)
      if(snapshot.exists()){
        const data = Object.values(snapshot.val())
        console.log(data)
      }
     }
  })
  return (
    <>
      <div className="balanceContainer">
        <div className="balanceBox">
          <div className="totalBalance">
            <div className="balanceDetail">
              <span>Total Balance</span>
              <span>30,000$</span>
            </div>
            <AddTransaction />
            <img src={money} alt="" />
          </div>
          <div className="pieChart">
            <PieChart series={chartData} width={400} height={200} />
          </div>
        </div>
        <div className="addTrade">
          <button onClick={toggleTransaction}>Add Transaction</button>
        </div>
        <div className ="addedList">
             <table>
               <thead className ="headTable">
                 <tr>
                    <th>Date</th>
                    <th>Asset</th>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Status</th>
                 </tr>
               </thead>
               <tbody>
                  <tr> 
                    <td>{today}</td>
                    <td>Etheruem</td>
                    <td>1000 $</td>
                    <td>1000</td>
                    <td><button>Approve</button></td>
                  </tr>
               </tbody>
             </table>
        </div>
      </div>
    </>
  );
}


const dataSet = [
  { id: 0, value: 10, label: "Binance", color: "orange" },
  { id: 1, value: 15, label: "Ethereum" },
  { id: 2, value: 20, label: "Catizen" },
];
const chartData = [
  {
    data: dataSet,
    highlightScope: { fade: "global", highlight: "item" },
    faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
    innerRadius: 20,
  },
];
