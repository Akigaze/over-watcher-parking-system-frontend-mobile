import {
    getOrders,
    scramble,
    getWorkingList,
    getParkingLotsAction,
    finishOrderAction,
    unparkingAction,
    historyOrderAction
} from "../actions/index";
import axios from "axios";
import Access_Token from "../constant/Access_token";

axios.defaults.baseURL = "https://over-back.herokuapp.com";
// axios.defaults.baseURL = "http://localhost:9090";
const token = window.localStorage.token;

const boyApi = {
    datas: {
        orders: [],
        works: [],
        historyOrders: [],
        parkingLots: []
    },
    qiangdan(dispatch, orderId, boyId,finish) {
        axios
            .put(
                `/orders/${orderId}/parkingBoy/${boyId}`,
                {
                    headers: { Authorization: token }
                }
            )
            .then(response => {
                console.log(
                    "点击一个订单进行抢单的请求结果\n----------------------"
                );
                console.log(response);
                const order = response.data;
                finish()
                dispatch(scramble(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findAllOrders(dispatch) {
        axios
            .get("/orders/status?status=无人处理",
            {
                headers: { Authorization: token }
            })
            .then(response => {
                console.log("抢单按钮的请求结果\n----------------------");
                console.log(response);
                this.datas.orders = response.data.map(order => {
                    const { id, carId, createdDate } = order;
                    return {
                        id,
                        carId,
                        createdDate: formatDate(createdDate)
                    };
                });
                dispatch(getOrders(this.datas.orders));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findAllWork(dispatch) {
        const boyId = window.localStorage.id;
        axios
            .get(`/orders/after/${boyId}`,
                {
                    headers: { Authorization: token }
                })
            .then(response => {
                console.log("点击存取按钮的请求结果\n----------------------");
                console.log(response);
                this.datas.works = response.data.map(order => {
                    const { id, type, carId, time,name } = order;
                    return {
                        id,
                        type,
                        carId,
                        parkingLotName:name,
                        createdDate: formatDate(time)
                    };
                });
                dispatch(getWorkingList(this.datas.works));
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    getParkingLotsByBoyId(dispatch, boyId) {
        // const boyId=window.localStorage.id;

        axios
            .get(`/employees/${boyId}/parkingLots`,
                {
                    headers: { Authorization: token }
                })
            .then(response => {
                console.log(
                    "点击选择停车场按钮的请求结果\n----------------------"
                );
                console.log(response);
                this.datas.parkingLots = response.data.map(lot => {
                    const { id, name, size, initSize } = lot;
                    return { id, name, size, initSize };
                });
                dispatch(getParkingLotsAction(this.datas.parkingLots));
            })
            .catch(function(error) {
                console.log(error);
            });
    },

    finishOrder(dispatch, parkingLotId, orderId, close) {
        axios
            .put(
                `/orders/${orderId}/parkingLot/${parkingLotId}`,
                {
                    headers: { Authorization: token }
                }
            )
            .then(response => {
                console.log(
                    "点击选择停车场按钮的请求结果\n----------------------"
                );
                console.log(response);
                const order = response.data;
                close();
                dispatch(finishOrderAction(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    unparking(dispatch, carId, finish) {
        axios
            .put(
                `/orders/boyUnParkCarId?boyUnParkCarId=${carId}`,
                {
                    headers: { Authorization: token }
                }
            )
            .then(response => {
                console.log(
                    "点击完成取车按钮的请求结果\n----------------------"
                );
                console.log(response);
                const order = response.data;
                finish();
                dispatch(unparkingAction(order));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    findHistoryOrder(dispatch, boyId) {
        axios
            .get(`/orders/parkingBoy/${boyId}`, {
                headers: { Authorization: token }
            })
            .then(response => {
                console.log("查看历史订单请求结果\n----------------------");
                console.log(response);
                this.datas.historyOrders = response.data.map(order => {
                    const { id, carId, createdDate, status } = order;
                    return {
                        id,
                        carId,
                        createdDate: formatDate(createdDate),
                        status
                    };
                });
                dispatch(historyOrderAction(this.datas.historyOrders));
            })
            .catch(function(error) {
                console.log(error);
            });
    },
    signOut(){
        window.localStorage.token = null;
        window.localStorage.roles = null;
        window.localStorage.id = null;
        window.localStorage.username = null;
    },
    workingCheckIn(dispatch,finish){
        const userId=window.localStorage.id
        axios
            .put(`/employees/status/${userId}`, {
                headers: { Authorization: token }
            })
            .then(response => {
                console.log("打卡结果\n----------------------");
                console.log(response);
                finish()
                // dispatch(historyOrderAction(this.datas.historyOrders));


            })
            .catch(function(error) {
                console.log(error);
            });
    }
};


const formatDate = dataStr => {
    if ((dataStr !== null) && (dataStr !== undefined)) {
        let [date, timeStr]  = dataStr.split("T");
        let times = timeStr.split(":");
        let time = `${times[0]}:${times[1]}`;
        return `${date} ${time}`;
    }
};

export default boyApi;
