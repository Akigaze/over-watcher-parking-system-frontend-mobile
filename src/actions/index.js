export const login=(name,token)=>{
    return
    {
        type:"LOGIN",
        name,
        token
    }
}
export const getOrders = orders => ({
    type: "ASKORDERS",
    orders
});

export const scramble = order => ({
    type: "SCRAMBLE",
    order
});
export const getWorkingList = works => ({
    type: "WORKING",
    works
});
export const getParkingLotsAction = parkingLots => ({
    type: "PARKING",
    parkingLots
});
export const finishOrderAction = order => ({
    type: "FINISHPARKING",
    order
});

export const unparkingAction = order => ({
    type: "UNPARKING",
    order
});
export const historyOrderAction = historyOrders => ({
    type: "HISTORY",
    historyOrders
});
