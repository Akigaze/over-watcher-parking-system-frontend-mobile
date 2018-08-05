import React, { Component } from "react";
import { NavBar, List, Toast } from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;

export default class QiangDan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "yellowTab"
        };
    }
    success() {
        Toast.info("抢单成功！！！", 1);
    }
    qiangdaning() {
        // if(this.props.parkingLots.length===0){
        //     Toast.info("你还没有停车！！！", 1);
        //     return;
        // }
        // this.props.parkingLots.forEach(lot=>{
        //     if(lot.size>0){
                Toast.info("疯狂抢单！！！", 0.5);
        //         return
        //     }
        // })
        // Toast.info("你没有空余的停车位！！！", 1);


    }
    render() {
        const boyId = window.localStorage.id;
        const { unFinishOrders, clickOrder } = this.props;
        let orderList = unFinishOrders.map(order => {
            const { id, carId, createdDate } = order;
            return (
                <Item
                    extra="抢单"
                    arrow="horizontal"
                    onClick={() => {
                        clickOrder(id, boyId,this.success);
                        this.qiangdaning()
                    }}
                >
                    车牌号：{carId}
                    <Brief>停车时间 {createdDate}</Brief>
                </Item>
            );
        });
        return (
            <div>
                <NavBar>订单</NavBar>
                <List>{orderList}</List>
            </div>
        );
    }
}
