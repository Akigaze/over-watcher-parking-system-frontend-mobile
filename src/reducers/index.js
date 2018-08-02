export default (state = [], action) => {
    switch (action.type) {
        case "ASKORDERS": {
            let newState = [...action.orders]
            // let newState = []
            console.log("reducers: ");
            console.log(action.orders);

            return newState;
        }
        case "SCRAMBLE": {
            let newState = removeOrder([...state],action.order)
            // let newState = []
            console.log("SCRAMBLE: ");

            console.log(newState);

            return newState;
        }
        case "WORKING": {
            let newState = [...action.orders]
            // let newState = []
            console.log("wwwwwwwwww ");
            console.log(action.orders);

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
