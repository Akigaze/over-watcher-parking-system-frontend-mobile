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
        case "ADD_TODO": {
            let newState = JSON.parse(JSON.stringify(state));
            newState.todos = [...action.todosObject.afeterHandleTodos];
            console.log("add" + JSON.stringify(newState));
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
