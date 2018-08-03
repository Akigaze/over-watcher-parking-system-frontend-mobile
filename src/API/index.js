import { getOrders, scramble ,getWorkingList,getParkingLotsAction,finishOrderAction,unparkingAction} from "../actions/index";
import axios from "axios";
import Access_Token from "../constant/Access_token"

axios.defaults.baseURL = 'http://localhost:9090'
const token = window.localStorage.token;

const boyApi = {
    datas: {
        orders: [],
        works: [],
        parkingLots:[],
    },
    qiangdan(dispatch, orderId, boyId) {
        axios
            .put(
                 `http://localhost:9090/orders/${orderId}/parkingBoy/${boyId}`,
                 {
                     headers:{"Authorization":token}
                 }
            )
            .then(response => {
                console.log("点击一个订单进行抢单的请求结果\n----------------------")
                console.log(response);
                const order = response.data;
                dispatch(scramble(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findAllOrders(dispatch) {
        axios
            .get("http://localhost:9090/orders/status?status=无人处理",{
                headers:{"Authorization":token}
            })
            .then(response => {
                console.log("抢单按钮的请求结果\n----------------------")
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
                console.log("点击存取按钮的请求结果\n----------------------")
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
    },

    getParkingLotsByBoyId(dispatch,boyId){
        // const boyId=window.localStorage.id;

        axios
            .get(`http://localhost:9090/employees/${boyId}/parkingLots`)
            .then(response => {
                console.log("点击选择停车场按钮的请求结果\n----------------------")
                console.log(response);
                this.datas.parkingLots = response.data.map(lot => {
                    const { id,name, size, initSize } = lot;
                    return { id,name, size, initSize };
                });
                dispatch(getParkingLotsAction(this.datas.parkingLots));
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    finishOrder(dispatch,parkingLotId,orderId,close){
        axios
            .put(`http://localhost:9090/orders/${orderId}/parkingLot/${parkingLotId}`,{
                headers:{"Authorization":token}
            })
            .then(response => {
                console.log("点击选择停车场按钮的请求结果\n----------------------")
                console.log(response);
                const order = response.data
                close();
                dispatch(finishOrderAction(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    unparking(dispatch,carId,finish){
        
        axios
            .put(`http://localhost:9090/orders/boyUnParkCarId?boyUnParkCarId=${carId}`,{
                headers:{"Authorization":token}
            })
            .then(response => {
                console.log("点击完成取车按钮的请求结果\n----------------------")
                console.log(response);
                const order = response.data
                finish();
                dispatch(unparkingAction(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};

export default boyApi;
