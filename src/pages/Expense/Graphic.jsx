//props
import { ref,get, query } from "firebase/database"
import { useStore } from "../../../store.js"
import { db } from "../../firebase.js"
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from "react"
import { useQuery } from "react-query"
export const Graphic=()=>{
    const [data, setData] = useState([])
    const {updateArray,arrayData} = useStore()
    const newArray = [1,2,3,4,5,6,7,8,9,10,11,12,12,3,12]
    useEffect(()=>{
      const update=async()=>{
        const dbRef =query(ref(db, "month"),)
        const snapshot = await get(dbRef)
        if(snapshot.exists()){
           setData(snapshot.val())
           data.map((value)=>{
            updateArray(value.balance)
          })
  
        }
        else{
            console.log("error")
        }
    }
    update()
    console.log(arrayData)
  },[])
    return(
           <>
            <LineChart
                xAxis={[{ data: newArray }]}
                series={[
                  {
                    data: newArray,
                  },
                ]}
                width={500}
                height={300}
              />
           </>
    )
}