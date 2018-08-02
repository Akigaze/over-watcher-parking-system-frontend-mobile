import { getOrders } from "../actions/index";
import axios from 'axios'

const boyApi = {
    todoObject: {
        orders: [],
        filter: "all"
    },
    qiangdan(dispatch, id) {},
    findAllOrders(dispatch) {
        axios
            .get("http://localhost:9090/orders")
            .then(response => {
                console.log(response);
                this.todoObject.orders = response.data.map(order => {
                    const { carId, createdDate } = order;
                    return { carId, createdDate };
                });
                console.log(this.todoObject.orders)
                console.log("dispatch:"+dispatch)
                dispatch(getOrders(this.todoObject.orders));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};

export default boyApi;
