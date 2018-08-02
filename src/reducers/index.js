export default (state = [], action) => {
    switch (action.type) {
        case "ASKORDERS": {
            let newState = [...action.orders]
            // let newState = []
            console.log("reducers: ");
            console.log(action.orders);

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
