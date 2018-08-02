import { getOrders, scramble ,getWorkingList} from "../actions/index";
import axios from "axios";
import Access_Token from "../constant/Access_token"

axios.defaults.baseURL = 'http://localhost:9090'
const boyApi = {
    datas: {
        orders: [],
        works: [],

        filter: "all"
    },
    qiangdan(dispatch, orderId, boyId) {
        const token = window.localStorage.token;

        console.log("id---------" + orderId + "====" + boyId);
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
                console.log("0000000"+order);
                dispatch(scramble(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findAllOrders(dispatch) {
        axios
            .get("http://localhost:9090/orders/status?status=无人处理")
            .then(response => {
                console.log(response);
                this.datas.orders = response.data.map(order => {
                    const { id, carId, createdDate } = order;
                    return { id, carId, createdDate };
                });
                dispatch(getOrders(this.datas.orders));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findAllWork(dispatch){
        const boyId=window.localStorage.id;
        axios
            .get(`http://localhost:9090/orders/after/${boyId}`)
            .then(response => {
                console.log(response);
                this.datas.works = response.data.map(order => {
                    const { id,type, carId, createdDate } = order;
                    return { id,type, carId, createdDate };
                });
                dispatch(getWorkingList(this.datas.works));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};

export default boyApi;
