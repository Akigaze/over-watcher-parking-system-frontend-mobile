export const login=(name,token)=>{
    return
    {
        type:"LOGIN",
        name,
        token
    }
}
export const getOrders=(orders)=>(
    {
        type:"ASKORDERS",
        orders
    })
