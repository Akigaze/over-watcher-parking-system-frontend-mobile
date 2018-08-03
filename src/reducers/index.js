export default (
    state = {
    unFinishOrders:[],
    works:[],
    historyOrders:[],
    parkingLots:[]
}, action) => {
    switch (action.type) {
        case "ASKORDERS": {
            let {unFinishOrders,works,parkingLots,historyOrders}=state;
            let newState = {unFinishOrders:[...action.orders],works,parkingLots,historyOrders}
            return newState;
        }
        case "SCRAMBLE": {
            let unFinishOrders=[...state.unFinishOrders]
            let works=[...state.works]
            let parkingLots=[...state.parkingLots]
            let historyOrders=[...state.historyOrders]
            let newUnFinishOrders = removeOrder(unFinishOrders,action.order)
            const newState={unFinishOrders:newUnFinishOrders,works,parkingLots,historyOrders}
            return newState;
        }
        case "WORKING": {
            let {unFinishOrders,works,parkingLots,historyOrders}=state;
            let newState = {unFinishOrders,works:action.works,parkingLots,historyOrders}
            return newState;
        }
        case "PARKING": {
            let {unFinishOrders,works,parkingLots,historyOrders}=state;
            let newState = {unFinishOrders,works,parkingLots:action.parkingLots,historyOrders}
            return newState;
        }
        case "FINISHPARKING": {
            let unFinishOrders=[...state.unFinishOrders]
            let works=[...state.works]
            let parkingLots=[...state.parkingLots]
            let historyOrders=[...state.historyOrders]
            let newWorks = removeOrder(works,action.order)
            const newState={unFinishOrders,works:newWorks,parkingLots,historyOrders}
            return newState;
        }
        case "UNPARKING": {
            let unFinishOrders=[...state.unFinishOrders]
            let works=[...state.works]
            let parkingLots=[...state.parkingLots]
            let historyOrders=[...state.historyOrders]
            let newWorks = removeOrder(works,action.order)
            const newState={unFinishOrders,works:newWorks,parkingLots,historyOrders}
            return newState;
        }
        case "HISTORY": {
            let unFinishOrders=[...state.unFinishOrders]
            let works=[...state.works]
            let parkingLots=[...state.parkingLots]
            let historyOrders=[...state.historyOrders]
            const newState={unFinishOrders,works,parkingLots,historyOrders:action.historyOrders}
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
