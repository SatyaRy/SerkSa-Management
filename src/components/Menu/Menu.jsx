import "./Menu.scss"
import { Link } from "react-router-dom"
import {item} from "../../data/item.jsx"
export default function Menu(){
    return(
            <>
                <div className ="manu">
                   <span className="keyName">Key Feature</span>
                    {item.map((value,index)=>
                        (
                            <Link className ="keyFeature" to ={value.path} key ={index}>
                                <span>{value.logo}</span>
                                <span>{value.feature}</span>
                            </Link>
                        )
                    )}
                </div>
            </>
    )
}