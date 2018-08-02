import { getOrders, scramble } from "../actions/index";
import axios from "axios";
import Access_Token from "../constant/Access_token"

axios.defaults.baseURL = 'http://localhost:9090'
const boyApi = {
    todoObject: {
        orders: [],
        filter: "all"
    },
    qiangdan(dispatch, orderId, boyId) {
        // var instance = axios.create({
        //     baseURL: `http://localhost:9090/orders/${orderId}/parkingBoy/${boyId}`,
        //     timeout: 1000,
        //     headers: { "Authorization": window.localStorage.token }
        // });
        const token = window.localStorage.token;
        //console.log(token);
        console.log("id---------" + orderId + "====" + boyId);
        //axios.defaults.headers.common['authorization'] = Access_Token;
        axios
            .put(
                 `http://localhost:9090/orders/${orderId}/parkingBoy/${boyId}`,
                 {
                     headers:{"Authorization":token}
                 }
            )
            .then(response => {
                console.log(response);
                const order = response.data;
                console.log(this.todoObject.orders);
                console.log("dispatch:" + dispatch);
                dispatch(scramble(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findAllOrders(dispatch) {
        console.log("id---------" + window.localStorage.id);
        axios
            .get("http://localhost:9090/orders/status?status=无人处理")
            .then(response => {
                console.log("findAllOrders");

                console.log(response);
                this.todoObject.orders = response.data.map(order => {
                    const { id, carId, createdDate } = order;
                    return { id, carId, createdDate };
                });
                console.log(this.todoObject.orders);
                console.log("dispatch:" + dispatch);
                dispatch(getOrders(this.todoObject.orders));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};

export default boyApi;
