import { CiUser } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
export const item =[
    {
        path:"/expense",
        logo: <CiMoneyCheck1/>,
        feature: "Monthly PnL"
    },
    {
        path:"/users",
        logo: <CiUser/>,
        feature: "Users"
    },
    {
        path:"/balance",
        logo: <MdHistory/>,
        feature: "Daily Trade"
    },
]