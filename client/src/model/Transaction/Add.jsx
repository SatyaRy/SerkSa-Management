import { createPortal } from "react-dom";
import { useStore } from "../../../store";
import "./Add.scss"
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { ref,set,push,get } from "firebase/database";
import { useAdd } from "../../../store";
const addModal = document.getElementById("transactionModal");
export default function AddTransaction() {
  const { showTransaction ,toggleTransaction} = useStore();
  const [type, setType] = useState("")
  const {asset, addBuy,amount ,addAmount} = useAdd()
  const [active, setActive] = useState(null)
  const handleSave =async()=>{
    const dbRef = push(ref(db, "Balance"))
    await set(dbRef, {
      asset: asset,
      amount: amount
    }).then(()=>{toggleTransaction()}).catch((error)=>{
      console.log(error)
    })
  }
  return createPortal(
    <>
    {showTransaction && 
      <div className="transContainer">
          <div className ="transBox">
              <span>Make Transaction</span>
              <div className ="optionButton">
                {ButtonList.map((value,index)=>
                   <button key ={index} style={{background:value.id===active? value.color:"",color:value.id!=active? value.fontColor:""}} onClick ={()=>setActive(value.id)}>{value.option}</button>
                )}
              </div>
              <div className ="availableAssets">
                   <label htmlFor="">Asset</label>
                   <input type="text"  onChange ={(e)=>{addBuy(e.target.value)}}/>
                   <label htmlFor="">Amount</label>
                   <input type="number" onChange ={(e)=>{addAmount(e.target.value)}}/>
              </div>
              <div className ="addTransButton">
                <button onClick ={handleSave}>Save</button>
                <button onClick ={toggleTransaction}>Cancel</button>
              </div>
          </div>
      </div>}
    </>,
    addModal
  );
}

const ButtonList =[
  {
    id:1,
    option: "buy",
    color: "#6EC207",
    fontColor: "black",

  },
  {
    id:2,
    option: "Sell", 
    color: "#D91656",
    fontColor: "black",

  },
  {
    id:3,
    option: "Airdrop",
    color: "#6256CA",
    fontColor: "black",
  }
]
