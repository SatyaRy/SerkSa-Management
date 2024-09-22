import "./Expense.scss"
import React, { useEffect, useState } from 'react';
//data
import { Graphic } from "./Graphic.jsx"
import { db } from "../../firebase.js";
import { get,ref,update,query} from "firebase/database";
import { useStore } from "../../../store.js";
//import query
import { useQuery } from "react-query";
export default function Expense(){
    const [month, setMonth] = useState([])
    const {show,toggleShow,changeName,changeIndex} = useStore()
    const fetchData=async()=>{
            const dbRef =query(ref(db, "month"),)
            const snapshot = await get(dbRef)
            if(snapshot.exists()){
                setMonth(Object.values(snapshot.val()))
            }
            else{
                console.log("error")
            }
        }
    fetchData()
    const handleClick =(monthName,index)=>{
        toggleShow()
        changeName(monthName)
        changeIndex(index)
    }
    useQuery({queryKey:"firebaseData", queryFn:fetchData})
    return(
        <>
            <div className ="expense">
               <div style={{width:"1200px", display:"flex", border: "none",borderRadius:"10px", background:"white"}}>
                <Graphic/>
               </div>
                <div className ="box box4">
                   <span>Update Monthly PnL</span>
                    <div className ="inputData">
                       {show &&  <UpdateModel/>}
                      <table>
                        <thead>
                            <tr>
                                <th scope="col">Month</th>
                                <th scope="col">Profit</th>
                                <th scope="col">Loss</th>
                                <th scope="col">Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {month.map((value,index)=>{
                                return( 
                                        <>
                                            <tr  key={index}> 
                                                <td scope="col">{value.name}</td>
                                                <td scope="col" >
                                                    {value.income}
                                                </td>
                                                <td scope="col">
                                                    {value.expense}
                                                </td>
                                                <td scope="col">
                                                   <button onClick={()=>{handleClick(value.name,index+1)}}>Edit</button>
                                                </td>
                                            </tr>
                                        </>
                                )
                            })}
                        </tbody>
                      </table>
                    </div>
                </div>
            </div>
        </>
    )
}

const UpdateModel =({})=>{
    const {toggleShow,monthName,changeIncome, changeExpense,indexNumber, income, expense} = useStore()
    const fetchData=async()=>{
            const dbRef =  ref(db, `month/${indexNumber}`)
            const dataUpdate ={
                income: income,
                expense: expense,
            }
            await update(dbRef,dataUpdate)
            .then(()=>{
                console.log("successful")
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    const saveButton =()=>{
        toggleShow()
        fetchData()
    }
    return(
            <>
                <div className ="updateModel">
                    <span>Update Data</span>
                    <div className ="inputDataModel">
                        <span>Month: {monthName}</span>
                        <label htmlFor="#balanceInput">Income</label>
                        <input type="number" id ="balanceInput" value ={income}  min ="1" onChange={(e)=>{changeIncome(e.target.value)}}/>
                        <label htmlFor="#balanceInput">Expense</label>
                        <input type="number" id ="balanceInput" value ={expense}  min ="1" onChange={(e)=>{changeExpense(e.target.value)}}/>
                    </div>
                    <div className ="updateDataButton">
                        <button onClick={saveButton}>Save Update</button>
                        <button onClick ={toggleShow}>Cancel</button>
                    </div>
                </div>
            </>
    )
}