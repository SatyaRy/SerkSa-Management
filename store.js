import { create } from "zustand"
export const useStore = create((set)=>({
    show: false,
    balance:0,
    income:0,
    expense:0,
    monthName: "January",
    indexNumber: 0,
    arrayData:[],
    toggleShow: ()=>
        set((state)=>(
            {
                show: !state.show,
            })),
    changeName: (name)=>set(()=>({monthName: name})),
    changeIndex: (index)=>set(()=>({indexNumber:index })),
    changeBalance: (newBalance)=>set(()=>({balance: newBalance})),
    changeIncome: (newIncome)=>set(()=>({income: newIncome})),
    changeExpense: (newExpense)=>set(()=>({expense: newExpense})),
    updateArray: (array)=>set(()=>({arrayData: array}))
    

    
}))