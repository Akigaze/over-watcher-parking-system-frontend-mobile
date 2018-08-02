export default (
    state = {
    unFinishOrders:[],
    works:[],
    parkingLots:[]
}, action) => {
    switch (action.type) {
        case "ASKORDERS": {
            let {unFinishOrders,works,parkingLots}=state;
            let newState = {unFinishOrders:[...action.orders],works,parkingLots}
            return newState;
        }
        case "SCRAMBLE": {
            let unFinishOrders=[...state.unFinishOrders]
            let works=[...state.works]
            let parkingLots=[...state.parkingLots]
            let newUnFinishOrders = removeOrder(unFinishOrders,action.order)
            const newState={unFinishOrders:newUnFinishOrders,works,parkingLots}
            return newState;
        }
        case "WORKING": {
            let {unFinishOrders,works,parkingLots}=state;
            let newState = {unFinishOrders,works:action.works,parkingLots}
            return newState;
        }
        default:
            return state;
    }
};

const removeOrder=(orders,order)=>{
    for(let i=0;i<orders.length;i++){
        if(order.id==orders[i].id){
            orders.splice(i,1);
        }
    }
    return orders
}
