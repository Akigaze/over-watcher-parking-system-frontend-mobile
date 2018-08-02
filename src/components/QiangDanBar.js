import React,{Component} from "react";
import {NavBar,List} from "antd-mobile";
import Scramble from "./Scramble ";

const Item = List.Item;
const Brief = Item.Brief;

export default class QiangDan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'yellowTab',
        };
    }

    render() {
        console.log(this.props);
        const {orders,onQiangdan}=this.props;
        let orderList=this.props.orders.map(order=>{
            const {carId,createdDate}=order;
            return(
            <Item extra="抢单" arrow="horizontal" onClick={() => {onQiangdan(carId)}}>
                车牌号：{carId}
                <Brief>停车时间{createdDate}</Brief>
                </Item>
            )
        })
        return (
            <div>
                        <NavBar>
                        订单
                        </NavBar>
                        <List>
                    {orderList}
                </List>
            </div>
        )

    }
}
