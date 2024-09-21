import "./Users.scss"
import {db} from "../../firebase.js"
import {get,ref} from "firebase/database"
import { useState ,useEffect} from "react"
export default function Users(){
    const [user, setUser] = useState([])
    useEffect(()=>{
       const fetchData = async()=>{
            const dbRef = ref(db,"user/waitlist")
            const snapshot = await get(dbRef)
            if(snapshot.exists()){
                setUser(Object.values(snapshot.val()))
            }
            else{
                console.log("error")
            }
       }
       fetchData()
    },[])
    console.log(user)
    return(
        <>
             <div className ="table">
                       <table>
                            <thead>
                                <tr>
                                    <th scope="column">ID</th>
                                    <th scope="column">Email</th>
                                    <th scope="column">First Name</th>
                                    <th scope="column">Last Name</th>
                                    <th scope="column">High School</th>
                                    <th scope="column">Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                   {user.map((value,index)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.email}</td>
                                            <td>{value.firstName}</td>
                                            <td>{value.firstName}</td>
                                            <td>{value.highschool}</td>
                                            <td>{value.grade}</td>
                                        </tr>
                                    )
                                   })}
                            </tbody>
                       </table>
                    </div>
        </>
    )
}