import { create } from "zustand"
export const useStore = create((set)=>({
    show: false,
    income:0,
    expense:0,
    monthName: "January",
    indexNumber: 0,
    expenseData:[],
    incomeData:[],
    allData: [],
    showTransaction: false,
    toggleShow: ()=>
        set((state)=>(
            {
                show: !state.show,
            })),
    changeName: (name)=>set(()=>({monthName: name})),
    changeIndex: (index)=>set(()=>({indexNumber:index })),
    changeIncome: (newIncome)=>set(()=>({income: newIncome})),
    changeExpense: (newExpense)=>set(()=>({expense: newExpense})),
    expenseArray: (array)=>set(()=>({expenseData: array})),
    incomeArray: (array)=>set(()=>({incomeData: array})),
    allDataArray: (array)=>set(()=>({allData: array})),
    toggleTransaction: ()=>set((state)=>({showTransaction: !state.showTransaction}))
}))

export const useAdd = create((set)=>({
    asset: [],
    amount: [],
    addAmount: (newAmount)=>set(()=>({amount: newAmount})),
    addBuy: (newBuy)=>set(()=>({asset: newBuy }))

}))